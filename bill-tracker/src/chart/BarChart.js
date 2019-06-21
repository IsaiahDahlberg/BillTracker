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
                        data: props.bills.map( bill => { return bill.Amount }),
                        backgroundColor: props.bills.map( bill => { return bill.Color }),                    
                    }]
                }}
                width={370}
                options={{layout: { padding: { left: 5, right: 0, top: 15, bottom: 0 }}, maintainAspectRatio: false, responsive: false, legend:{display: false} }}
            />        
        </div>   
    )
}
  
export default BarChart