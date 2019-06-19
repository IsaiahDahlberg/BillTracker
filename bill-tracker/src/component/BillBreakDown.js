import React from "react"
import "./styles/BillBreakDown.css"

function BillBreakDown(props){
    var arr = props.bills.map(bill=>{
        return parseInt(bill.Amount)
    })


    var yearly = props.focusBill == null ? arr.reduce((a,b)=>  a+ b, 0)*12 : props.bills[props.focusBill].Amount*12
    var monthly = props.focusBill == null ? arr.reduce((a,b)=>  a+ b, 0) : props.bills[props.focusBill].Amount
    var weekly = props.focusBill == null ? arr.reduce((a,b)=>  a+ b, 0)/4 : props.bills[props.focusBill].Amount/4

    return(
        <div className="BillBreakDown">
            <div className="bbBox">
                <b>Weekly</b>
                <br />
                ${weekly}
            </div>
            <div className="bbBox">
                <b>Monthly</b>
                <br />
                ${monthly}
            </div>
            <div className="bbBox">
                <b>Yearly</b>
                <br />
                ${yearly}
            </div>
        </div>
    )
}

export default BillBreakDown