import React from 'react'
import { TableHead } from './TableHead'
import { TableRow } from './TableRow'
import { useSelector } from 'react-redux'
export const TimeTable = () => {
    const days=["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",  "Sunday"]
    const state=useSelector(state=>state);
  return (
    <table>
        <TableHead days={days}></TableHead>
        <tbody>
            <TableRow state={state[0]}></TableRow>
            <TableRow state={state[1]}></TableRow>
            <TableRow state={state[2]}></TableRow>
        </tbody>
    </table>
  )
}
