import {useFormik} from "formik";
import {clsx} from "clsx";
import * as React from "react";
import form from "../../assets/png/home/form.png";
import style from "./Home.module.scss";

export interface IValues {
    eth: number
}
const initialValues: IValues = {
    eth: 0,
}

//========= FORM CUSTOM =========//
export const FormCustom = () => {
    const onSubmit = (values: IValues) => {

    }
    const formik = useFormik<IValues>({
        initialValues,
        onSubmit
    })

    return (
        <form className={clsx(style.form, "form")}
              onSubmit={formik.handleSubmit}
        >
            <img src={form} alt="" className={style.back}/>
            <div className={style.content}>
                <p className={style.label}>$blublu raised so far</p>
                <p className={style.raised}>$ 502,021 raised</p>
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
                               {...formik.getFieldProps('eth')}
                        />
                    </div>

                    <div className={style.row}>
                        <p className={style.rowLabel}>
                            $ blublu
                        </p>
                        <p className={style.field}>
                            {formik.values.eth * 133333}
                        </p>
                    </div>

                    <p className={style.equal}>=</p>

                </div>

                <p className={style.course}>1 $BLUBLU = $0.000333</p>

                <button type="submit"
                        className={style.submit}
                >
                    <span>BUY NOW</span>
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
}
