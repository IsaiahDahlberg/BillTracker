import React from "react"

class AddBill extends React.Component{
    constructor(props){
        super(props)
        this.state={
            submitBill: this.props.submit
        }
    }

    render(){
        return(
            <div>
                <p>Add Bill</p>
                <form onSubmit={()=>this.submitBill}>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddBill