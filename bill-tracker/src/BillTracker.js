import React from "react"
import AddBill from "./component/AddBill"

class BillTracker extends React.Component{
    constructor(){
        super()
        this.state = {
            bills: {}
        }

        this.addBill = this.addBill.bind(this)
    }

    addBill = (name, value) =>{
        alert("it works")
        alert(name + value)
    }

    render(){
        return(
            <div>
                <p>Bill Tracker</p>

                <AddBill addBill={this.addBill} /> 
                
            </div>
        )
    }
}

export default BillTracker