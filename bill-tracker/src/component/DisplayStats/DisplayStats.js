import React from 'react'

import DisplayAllBills from "./SubComponents/DisplayAllBills"
import BillBreakDown from "./SubComponents/BillBreakDown"
import SalaryUsedBreakDown from "./SubComponents/SalaryUsedBreakDown"
import SalaryBreakDown from "./SubComponents/SalaryBreakDown"

import './DisplayStats.css'

const CurrencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
})

class DisplayStats extends React.Component{
    constructor(props){
        super(props)
        this.state={
            focusBill: null
        }
        
        this.changeFocus = this.changeFocus.bind(this)
    }

    changeFocus = (i) =>{
        this.setState({
            focusBill: i
        })    
    }

    render(){
        return(
            <div className="DisplayStats">
                <DisplayAllBills deleteBill={this.props.deleteBill} currencyFormatter={CurrencyFormatter} bills={this.props.bills} changeFocus={this.changeFocus} focusBill={this.state.focusBill}/>
    
                <BillBreakDown bills={this.props.bills} currencyFormatter={CurrencyFormatter} focusBill={this.state.focusBill}/>
    
                <SalaryBreakDown salary={this.props.salary} currencyFormatter={CurrencyFormatter} taxRate={this.props.taxRate} />
            </div>
        )
    }
}

export default DisplayStats