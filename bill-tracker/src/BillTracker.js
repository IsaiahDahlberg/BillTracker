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


    addBill(event){
        console.log("it works!")
        const {name, value} = event.target
        console.log(name + value)
    }

    render(){
        return(
            <div>
                <p>Bill Tracker</p>

                <AddBill submit={this.addBill} /> 
                
            </div>
        )
    }
}

export default BillTracker