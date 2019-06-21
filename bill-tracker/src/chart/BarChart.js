import React from 'react'
import { Bar } from 'react-chartjs-2';
import { throwStatement } from '@babel/types';

function BarChart(props){  
    return (    
        <div  className="barChart">
            <Bar                 
                type= 'bar'
                data={{
                    labels: props.bills.map(bill => { return bill.Name }),
                    datasets:[{
                        labal:'Colors',
                        data: props.bills.map( bill => { return bill.Amount }),
                        backgroundColor: props.bills.map( bill => { return bill.Color }),                    
                    }]
                }}
                options={{ maintainAspectRatio: false, responsive: false}}
            />        
        </div>   
    )
}
  
export default BarChart