import React from 'react'
import { Pie } from 'react-chartjs-2';
import { throwStatement } from '@babel/types';

function PieChart(props){  
    return (    
        <div className="pieChart">
            <Pie  
            type= 'pie'
            data={{
                labels: props.bills.map(bill => { return bill.Name }),
                datasets:[{
                    labal:'Colors',
                    data: props.bills.map( bill => { return bill.Amount }),
                    backgroundColor: props.bills.map( bill => { return bill.Color }),                    
                }]
            }}
            options={{ maintainAspectRatio: false, responsive: false}}/>        
        </div>   
    )
}

  
  export default PieChart