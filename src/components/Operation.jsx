import {useState} from "react";
import {withdraw, deposit} from "../actions/accountActions.js";
import {useDispatch} from "react-redux";

const Operation = () => {
    const [sum, setSum] = useState(1);
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => dispatch(withdraw(sum))}>Withdraw</button>
            <input
                type={'number'}
                onChange={e => setSum(+e.target.value)}
                value={sum}
            />
            <button onClick={() => dispatch(deposit(sum))}>Deposit</button>
        </div>
    );
};

export default Operation;