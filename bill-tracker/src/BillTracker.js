import React from "react"
import AddBill from "./component/AddBill"
import DisplayAllBills from "./component/DisplayAllBills.js"
import './BillTracker.css'

class BillTracker extends React.Component{
    constructor(){
        super()
        this.state = {
            bills: []
        }

        this.addBill = this.addBill.bind(this)
    }

    addBill = (name, value) =>{
       var bill = {Name:name,Amount:value} 
        this.setState(prevState=>{
            var arr = prevState.bills
            arr.push(bill)
            return{
                bills: arr
            }
        })
    }

    render(){
        return(
            <div className="container">
                <div className="header">Bill Tracker</div>
            
                <AddBill className="smallBox smallBox--1" addBill={this.addBill} /> 

                <DisplayAllBills className="smallBox smallBox--2" bills={this.state.bills}/>

                <div className="smallBox smallBox--3">smallBox smallBox--3</div>

                <div className="sidebar">sidebar</div>

                <div className="mainContent">mainContent</div>

                <div className="footer">footer</div>
                
            </div>
        )
    }
}

export default BillTracker