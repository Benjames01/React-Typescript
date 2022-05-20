import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider, useSelector, useDispatch } from "react-redux"
import { store} from './state/store';
import { bindActionCreators } from "redux"
import { actionCreators } from "./state/index"

function App() {

  const account : any = useSelector((state : any) => state.account)
  const dispatch = useDispatch();

  const {depositMoney, withdrawMoney} = bindActionCreators(actionCreators, dispatch);



  return (
    <div className="App">
      <h1>{account}</h1>
      <button onClick={()=>depositMoney(100)}>Deposit</button>
      <button onClick={()=>withdrawMoney(50)}>Withdraw</button>          


      <button onClick={()=>{
        console.log("Beans on toast.")
      }}>Beans</button>          
    </div>
  );
}

export default App;
