import React from 'react'
import './styles/DisplayAllBills.css'

function DisplayAllBills(props) {
    return (
        <div className="displayAllBills">
            <p><b>All Bills</b></p><button onClick={()=>props.changeFocus(null)}>Unfocus</button>
            {props.bills.map((bill, index) => {
                return (
                    <div key={index} style={{backgroundColor: bill.Color}}>
                        <button onClick={()=>props.changeFocus(index)}>Focus</button>
                        {bill.Name}:  {props.currencyFormatter.format(bill.Amount)} 
                        <button className="deleteButton" onClick={()=>props.deleteBill(index)}>X</button>
                    </div>
                )
            })}
        </div>
    )
}

export default DisplayAllBills