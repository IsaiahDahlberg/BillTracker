import React from "react"
import TitleValueBox from "../../smaller-component/TitleValueBox"

function SalaryUsedBreakDown (props){
    var arr = props.bills.map(bill=>{
        return parseInt(bill.Amount)
    })  

    const percentUsed = ((props.total*12)/props.income)*100

    return(
        <div>
            <p><b>% Of Salary Used</b></p>
            <TitleValueBox upperText="Yearly" lowerText={"%" + percentUsed.toFixed(2)} color={props.color}/>
        </div>
    )
}

export default SalaryUsedBreakDown