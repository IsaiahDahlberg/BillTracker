import React from "react"

const bills = [{name:"Rent", amount:1500}, 
               {name:"College Debt", amount:1300},
               {name:"Gas",amount:350},
               {name:"Food",amount:520},
               {name:"Random",amount:650},
               {name:"Car Insurance",amount:420},
               {name:"Internet",amount:280},
               {name:"Phone",amount:375},
               {name:"Car Payment", amount:740},
               {name:"Yacht Payment", amount:1100}
            ]
function CopyPastaBills (props){

    return (
        <div style={{backgroundColor: "#ddd", border: "solid", borderColor: "blue", padding: 25 }}>
            <button onClick={()=>bills.map(bill =>{console.log(bill.name + " " +bill.amount)})}>Console Log</button>
            <button onClick={()=>bills.map(bill=>{props.addBill(bill.name,bill.amount)})}>Auto Fill Bills</button>
            <button onClick={()=>props.submitSalary(185000,35)}>Auto Fill Salary</button>
        </div>
    )
}

export default CopyPastaBills