import React from "react"
import "./styles/BillBreakDown.css"

function BillBreakDown(props){
    var arr = props.bills.map(bill=>{
        return parseInt(bill.Amount)
    })  

    var yearly, monthly, weekly, color, total

    if(props.focusBill == null ){
        total = arr.reduce((a,b)=>  a+ b, 0)
        color = "#eee" 
    }else{
        total = props.bills[props.focusBill].Amount     
        color =  props.bills[props.focusBill].Color
    }

    yearly = total*12;
    monthly = total
    weekly = total/4
    
    return(
        
        <div className="BillBreakDown">
            <div className="bbBox" style={{backgroundColor: color}}>
                <b>Weekly</b>
                <br />
                ${weekly}
            </div>
            <div className="bbBox" style={{backgroundColor: color}}>
                <b>Monthly</b>
                <br />
                ${monthly}
            </div>
            <div className="bbBox" style={{backgroundColor: color}}>
                <b>Yearly</b>
                <br />
                ${yearly}
            </div>
        </div>
    )
}

export default BillBreakDown