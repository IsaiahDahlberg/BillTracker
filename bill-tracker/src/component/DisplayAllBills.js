import React from 'react'

function DisplayAllBills(props) {
    return (<div>{props.bills.map((bill, index) => {
        return (
            <div key={index}>
                {bill.Name} {bill.Amount}
            </div>
        )
    })}</div>
    )
}

export default DisplayAllBills