import React from "react"
import TitleValueBox from "../../smaller-component/TitleValueBox"

function SalaryBreakDown (props){
    var yearly, monthly, weekly

    var income = props.salary && props.taxRate ?props.salary-(props.salary*(props.taxRate/100)) : 0

    yearly = props.currencyFormatter.format(income)
    monthly = props.currencyFormatter.format(income/12)
    weekly = props.currencyFormatter.format(income/48)

    return(
        <div className="SalaryBreakDown">
                <div>
                    <p><b>Salary: {props.currencyFormatter.format(props.salary)}</b></p>   
                    <p><b>Tax Rate: %{props.taxRate}</b></p>
                    <p><b>Income After Tax</b></p>     
                    <TitleValueBox upperText="Weekly" lowerText={weekly} color="white" />
                    <TitleValueBox upperText="Monthly" lowerText={monthly} color="white" />
                    <TitleValueBox upperText="Yearly" lowerText={yearly} color="white" />              
                </div>
        </div>
    )
}

export default SalaryBreakDown