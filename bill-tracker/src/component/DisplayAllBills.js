import React from 'react'
import './styles/DisplayAllBills.css'

function DisplayAllBills(props) {
    return (
        <div className="displayAllBills">
            <p><b>All Bills</b></p><button onClick={()=>props.changeFocus(null)}>Unfocus</button>
            {props.bills.map((bill, index) => {
                return (
                    <div key={index}>
                        <button onClick={()=>props.changeFocus(index)}>Focus</button>
                        {bill.Name}:  ${bill.Amount} 
                        <button className="deleteButton" onClick={()=>props.deleteBill(index)}>X</button>
                    </div>
                )
            })}
        </div>
    )
}

export default DisplayAllBills