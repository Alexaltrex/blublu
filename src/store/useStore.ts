import {useContext} from "react";
import {Store} from "../store/store";
import {StoreContext} from "../components/A0_App/AppContainer";

export const useStore = (): Store => useContext(StoreContext)
