import React from "react"
import TitleValueBox from "../../smaller-component/TitleValueBox"
import SalaryUsedBreakDown from './SalaryUsedBreakDown'
import './styles/BillBreakDown.css'

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

    yearly = props.currencyFormatter.format(total*12)
    monthly = props.currencyFormatter.format(total)
    weekly = props.currencyFormatter.format(total/4)
    
    return(
        <div className="BillBreakDown">
            <p><b>Spendings</b></p>
            <TitleValueBox upperText="Weekly" lowerText={weekly} color={color} />
            <TitleValueBox upperText="Monthly" lowerText={monthly} color={color} />
            <TitleValueBox upperText="Yearly" lowerText={yearly} color={color} />
            
        </div>
    )
}

export default BillBreakDown