import React from 'react'
import { Link } from 'react-router-dom'
export const TableRow = ({state}) => {
  let currow=state.valuesofrow.map((food,key)=>{
    return (<td key={key}>
    <Link to={`/form/${state.row} ${food.column}`}>{food.todayfood}</Link>
    </td>)
  })
  return (
    <tr>
        {currow}
    </tr>
  )
}
