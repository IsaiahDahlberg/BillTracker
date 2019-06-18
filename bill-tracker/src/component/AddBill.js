import React from "react"
import "./styles/AddBill.css"

class AddBill extends React.Component{
    constructor(props){
        super(props)
        this.state={
            addBill: this.props.addBill,
            billName: "",
            amount: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    render(){
        return(
            <div className="AddBill">
                <p><b>Add Bill</b></p>
                <form>
                         
                    <input 
                        name="billName"
                        type="text"
                        value={this.state.billName}
                        onChange={this.handleChange}
                        placeholder="Bill Name"
                    />

                    <input 
                        name="amount"
                        type="number"
                        value={this.state.amount}
                        onChange={this.handleChange}
                        placeholder="Bill amount"
                    />
  
                    <div onClick={()=>this.state.addBill(this.state.billName, this.state.amount)} className="AddBillButton">Submit</div>
                </form>
            </div>
        )
    }
}

export default AddBill