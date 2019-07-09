import React from "react"
import AddBill from "./component/AddBill"
import DisplayAllBills from "./component/DisplayAllBills.js"
import BillBreakDown from "./component/BillBreakDown"
import SalaryBreakDown from "./component/SalaryBreakDown"
import PieChart from "./chart/PieChart"
import BarChart from "./chart/BarChart"
import Income from "./component/Income"
import './BillTracker.css'

import CopyPastaBills from "./DevTools/CopyPastaBills"

class BillTracker extends React.Component{
    constructor(){
        super()
        this.state = {
            salary: null,
            taxRate: null,
            bills: [],
            income: null,
            focusBill: null
        }

        this.addBill = this.addBill.bind(this)
        this.deleteBill = this.deleteBill.bind(this)
        this.changeFocus = this.changeFocus.bind(this)
        this.assignRandomColor = this.assignRandomColor.bind(this)
        this.submitIncome = this.submitIncome.bind(this)
    }

    addBill = (name, value) =>{
       var bill = {Name:name,Amount:value, Color: this.assignRandomColor()} 
        this.setState(prevState=>{
            var arr = prevState.bills
            arr.push(bill)
            return{
                bills: arr
            }
        })
    }

    submitIncome = (salary, taxRate) =>{ 
         this.setState({
             salary: salary,
             taxRate: taxRate
         })
     }
 


    deleteBill = (i) =>{
        this.setState(prevState=>{
            var newBills =  prevState.bills.filter((bill,index)=>{
               return index !== i
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

    assignRandomColor(){
        var color
        while(true){
            color = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6) 
            var av  = parseInt(color.substring(1,3),16) + parseInt(color.substring(3,5),16) + parseInt(color.substring(5),16) 
            var isDark = av < 381 ? true : false
            if(!isDark){
                break;
            }              
        }
        return (
           color
        )      
    }

    render(){
        return(
            <div className="container">
                <div className="header">Bill Tracker</div>
          
                <AddBill addBill={this.addBill} /> 

                <DisplayAllBills deleteBill={this.deleteBill} bills={this.state.bills} changeFocus={this.changeFocus} focusBill={this.state.focusBill}/>

                <BillBreakDown bills={this.state.bills} focusBill={this.state.focusBill}/>

                <SalaryBreakDown salary={this.state.salary} taxRate={this.state.taxRate} />

                <PieChart bills={this.state.bills} />

                <BarChart bills={this.state.bills} />
            
                <Income submitIncome={this.submitIncome} />

                <CopyPastaBills addBill={this.addBill} submitSalary={this.submitIncome}/>
            </div>
        )
    }
}

export default BillTracker

