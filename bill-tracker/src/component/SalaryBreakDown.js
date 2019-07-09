import React from "react"
import CurrencyFormatter from "../Helper/Formatter"

function SalaryBreakDown (props){
    var yearly, monthly, weekly

    yearly = props.salary && props.taxRate ?props.salary-(props.salary*(props.taxRate/100)) : 0;
    monthly = yearly/12;
    weekly = monthly/4;

    return(
        <div className="SalaryBreakDown">
                  <div>
                    <p><b>Salary: {CurrencyFormatter.format(props.salary)}</b></p>   
                    <p><b>Tax Rate: %{props.taxRate}</b></p>
                    <p><b>Income After Tax</b></p>
                    <div className="bbBox">
                    <b>Weekly</b>
                    <br />
                    {CurrencyFormatter.format(weekly)}
                    </div>
                    <div className="bbBox">
                        <b>Monthly</b>
                        <br />
                        {CurrencyFormatter.format(monthly)}
                    </div>
                    <div className="bbBox">
                        <b>Yearly</b>
                        <br />
                        {CurrencyFormatter.format(yearly)}
                    </div>
                </div>
        </div>
    )
}

export default SalaryBreakDown