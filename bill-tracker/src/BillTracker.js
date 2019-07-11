import React from "react"
import AddBill from "./component/AddBill"
import PieChart from "./chart/PieChart"
import BarChart from "./chart/BarChart"
import Income from "./component/Income"
import DisplayStats from "./component/DisplayStats/DisplayStats"
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
       
        }

        this.addBill = this.addBill.bind(this)
        this.deleteBill = this.deleteBill.bind(this)
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

                <PieChart bills={this.state.bills} />

                <BarChart bills={this.state.bills} />

                <DisplayStats deleteBill={this.deleteBill}
                              bills={this.state.bills}
                              salary={this.state.salary}
                              taxRate={this.state.taxRate} />
            
                <Income submitIncome={this.submitIncome} />

                <CopyPastaBills addBill={this.addBill} submitSalary={this.submitIncome}/>
            </div>
        )
    }
}

export default BillTracker

