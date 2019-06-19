import React from "react"
import AddBill from "./component/AddBill"
import DisplayAllBills from "./component/DisplayAllBills.js"
import BillBreakDown from "./component/BillBreakDown"
import './BillTracker.css'

class BillTracker extends React.Component{
    constructor(){
        super()
        this.state = {
            bills: [],
            focusBill: null
        }

        this.addBill = this.addBill.bind(this)
        this.deleteBill = this.deleteBill.bind(this)
        this.changeFocus = this.changeFocus.bind(this)
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

    deleteBill = (i) =>{
        this.setState(prevState=>{
            var newBills =  prevState.bills.filter((bill,index)=>{
               return index != i
            })
            return{
                bills: newBills,
                focusBill: null
            }
        })
    }   

    changeFocus = (i) =>{
        this.setState({
            focusBill: i
        })    
    }


    render(){
        return(
            <div className="container">
                <div className="header">Bill Tracker</div>
            
                <AddBill addBill={this.addBill} /> 

                <DisplayAllBills deleteBill={this.deleteBill} bills={this.state.bills} changeFocus={this.changeFocus} focusBill={this.state.focusBill}/>

                <BillBreakDown bills={this.state.bills} focusBill={this.state.focusBill}/>

                <div className="sidebar">sidebar</div>

                <div className="mainContent">mainContent</div>

                <div className="footer">footer</div>
                
            </div>
        )
    }
}

export default BillTracker