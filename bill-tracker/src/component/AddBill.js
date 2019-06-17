import React from "react"

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
                <p>Add Bill</p>
                <form onSubmit={()=>this.state.addBill(this.state.billName, this.state.amount)}>
                         
                    <input 
                        name="billName"
                        type="text"
                        value={this.state.billName}
                        onChange={this.handleChange}
                        placeHolder="Bill Name"
                    />

                    <input 
                        name="amount"
                        type="number"
                        value={this.state.amount}
                        onChange={this.handleChange}
                        placeHolder="Bill amount"
                    />
  
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddBill