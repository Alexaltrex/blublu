import {useFormik} from "formik";
import {clsx} from "clsx";
import * as React from "react";
import form from "../../assets/png/home/form.png";
import style from "./Home.module.scss";
import {observer} from "mobx-react-lite";
import {useStore} from "../../store/useStore";
import {AlertColor} from "@mui/material";
import {contractAddress, getContract, getProvider} from "../../helpers/ethers.helper";
import {useEffect} from "react";
import {BigNumber, ethers} from "ethers";

export interface IValues {
    value: number
}

const initialValues: IValues = {
    value: 0,
}

//========= FORM CUSTOM =========//
export const FormCustom = observer(() => {
    const {
        currentAccountAddress,
        setAlert, loading, setLoading,
        investingBalance, setInvestingBalance,
        errorHandler
    } = useStore();

    const getInvestingBalance = async (currentAccountAddress: string) => {
        const provider = getProvider();
        const contract = getContract(provider);
        const investingBalance = await contract.connect(currentAccountAddress).getPayment();
        setInvestingBalance(
            new Intl.NumberFormat('ru-RU').format(Number(
                ethers.utils.formatUnits(investingBalance)
            ))
        )
        console.log(investingBalance)
    }

    const onSubmit = async ({value}: IValues) => {
        if (!(window.ethereum && currentAccountAddress)) {
            setAlert({
                open: true,
                message: "Please connect Metamask",
                severity: "error" as AlertColor
            })
        } else {
            try {
                setLoading(true);
                const provider = getProvider();
                const signer = provider.getSigner(currentAccountAddress);
                const tx = await signer.sendTransaction({
                    to: contractAddress,
                    value: BigNumber.from(String(value * 10 ** 18))
                })
                await tx.wait();
                await getInvestingBalance(currentAccountAddress);
                setAlert({
                    open: true,
                    message: `Success invest ${value} eth`,
                    severity: "success" as AlertColor
                })
            } catch (e: any) {
                errorHandler(e)
            } finally {
                setLoading(false)
                formik.resetForm();
            }

        }
    }
    const formik = useFormik<IValues>({
        initialValues,
        onSubmit
    })

    useEffect(() => {
        if (window.ethereum && currentAccountAddress) {
            const onMount = async () => {
                try {
                    await getInvestingBalance(currentAccountAddress);
                } catch (e: any) {
                    errorHandler(e)
                }
            }
            onMount().then();
        }
    }, [currentAccountAddress])

    return (
        <form className={clsx(style.form, "form")}
              onSubmit={formik.handleSubmit}
        >
            <img src={form} alt="" className={style.back}/>
            <div className={style.content}>
                <p className={style.label}>$blublu raised so far</p>
                <p className={style.raised}>
                    {
                        investingBalance && currentAccountAddress
                            ? `ETH ${investingBalance} raised`
                            : "Invest your ETH"
                }
                </p>
                <div className={style.progress}>
                    <div className={style.inner}
                         style={{width: `60%`}}
                    />
                </div>
                <p className={style.conversion}>conversion calculator</p>

                <div className={style.rows}>

                    <div className={style.row}>
                        <p className={style.rowLabel}>
                            $ ETH
                        </p>
                        <input className={style.field}
                               type="number"
                               {...formik.getFieldProps('value')}
                        />
                    </div>

                    <div className={style.row}>
                        <p className={style.rowLabel}>
                            $ blublu
                        </p>
                        <p className={style.field}>
                            {/*{formik.values.eth * 133333}*/}
                            102383947821
                        </p>
                    </div>

                    <p className={style.equal}>=</p>

                </div>

                <p className={style.course}>1 $BLUBLU = $0.000008</p>

                <button type="submit"
                        className={style.submit}
                        disabled={loading}
                >
                    <span>{loading ? "IN PROGRESS..." : "BUY NOW"}</span>
                </button>

                <a href="#"
                   className={style.notEnough}
                   target="_blank"
                   rel="nofollow noopener noreferrer"
                >
                    Not enough ETH? Top up now
                </a>

            </div>
        </form>
    )
})
