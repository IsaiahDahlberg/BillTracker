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
        this.submitBill = this.submitBill.bind(this)
    }

    handleChange(event){
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    submitBill(){
        if(this.state.billName.length > 0 && this.state.amount > 0){
            this.state.addBill(this.state.billName, this.state.amount)
            this.setState({
                billName: "",
                amount: ""
            })
        }
        
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
  
                    <div onClick={()=>this.submitBill()} className="AddBillButton">Submit</div>
                </form>
            </div>
        )
    }
}

export default AddBill