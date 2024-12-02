import {accountReducer} from "../reducer/accountreducer.js";
import {createStore} from "../redux/createStore.js";

const initialState = {
    balance: 0
}
export const store = createStore(accountReducer, initialState);