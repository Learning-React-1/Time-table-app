import React from 'react'
import './TimeTable.css'
import { TableHead } from './TableHead'
import { TableRow } from './TableRow'
import { useSelector } from 'react-redux'
export const TimeTable = () => {
    const days=["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",  "Sunday"]
    const state=useSelector(state=>state);
    
  return (
    <div>
        <h1>Click on food to edit the food</h1>
        <table className='food-table'>
        
        <TableHead days={days}></TableHead>
        <tbody>
            <TableRow state={state[0]}></TableRow>
            <TableRow state={state[1]}></TableRow>
            <TableRow state={state[2]}></TableRow>
        </tbody>
      </table>
    </div>
    
  )
}
