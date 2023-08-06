import {action, makeObservable, observable} from "mobx";

export class Store {
    audio: boolean = false

    constructor() {
        makeObservable(this, {
            audio: observable,

            setAudio: action.bound,
        })
    }

    setAudio(audio: boolean) {
        this.audio = audio
    }

}


export const store = new Store()
