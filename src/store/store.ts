import { AlertColor } from "@mui/material";
import {action, makeObservable, observable} from "mobx";

export interface IAlert {
    open: boolean
    message: string
    severity: AlertColor
    }


export class Store {
    audio: boolean = false
    showAccountPopup: boolean = false
    loading: boolean = false
    alert: IAlert = {
        open: false,
        message: "",
        severity: "success" as AlertColor
    }
    connecting: boolean = false; // подключение к аккаунту Metamask
    currentAccountAddress: string | null = null
    investingBalance = null as null | string

    constructor() {
        makeObservable(this, {
            audio: observable,
            showAccountPopup: observable,
            loading: observable,
            alert: observable,
            connecting: observable,
            currentAccountAddress: observable,
            investingBalance: observable,

            setAudio: action.bound,
            setShowAccountPopup: action.bound,
            setLoading: action.bound,
            setAlert: action.bound,
            setConnecting: action.bound,
            setCurrentAccountAddress: action.bound,
            errorHandler: action.bound,
            setInvestingBalance: action.bound
        })
    }

    setAudio(audio: boolean) {
        this.audio = audio
    }

    setShowAccountPopup(showAccountPopup: boolean) {
        this.showAccountPopup = showAccountPopup;
    }

    setLoading(loading: boolean) {
        this.loading = loading;
    }

    setAlert(alert: IAlert) {
        this.alert = alert
    }

    setConnecting(connecting: boolean) {
        this.connecting = connecting
    }

    setCurrentAccountAddress(currentAccountAddress: string | null) {
        this.currentAccountAddress = currentAccountAddress;
    }

    setInvestingBalance(investingBalance: string) {
        this.investingBalance = investingBalance;
    }

    errorHandler(e: any) {
        // for (let key in e) {
        //     console.log("e." + key + ": " + e[key])
        // }
        console.log(e)
        console.log(e?.reason || e?.message || "Error");
        this.setAlert({
            open: true,
            message: e?.reason || e?.message || "Error",
            severity: "error"
        })
    }

}


export const store = new Store()
