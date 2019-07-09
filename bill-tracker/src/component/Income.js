import React from 'react'


class Income extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            submitIncome: this.props.submitIncome,
            salary: "",
            taxRate: ""
        }

        this.handleChange = this.handleChange.bind(this)
        this.submitIncome = this.submitIncome.bind(this)
    }

    handleChange(event){
        const {name,value} = event.target
        this.setState({
            [name]: value
        })
    }

    submitIncome(){
        if(this.state.salary > 0 && this.state.taxRate > 0){
            this.state.submitIncome(this.state.salary, this.state.taxRate)
            this.setState({
                salary: "",
                taxRate: ""
            })
        }
    }

    render(){
        return(
            <div className="Income">
                <p><b>Income</b></p>     
                <div style={{padding: 5}}>
                    <input 
                        type="currency"
                        name="salary"
                        value={this.state.salary}
                        onChange={this.handleChange}
                        placeholder="Salary"
                    />             
                    <input 
                        type="number"
                        name="taxRate"
                        value={this.state.taxRate}
                        onChange={this.handleChange}
                        placeHolder="Tax Rate %"
                    />
                </div>          

                <button className="SubmitButton" onClick={()=>this.submitIncome()}>Submit</button>
            </div>
        )
    }
}

export default Income