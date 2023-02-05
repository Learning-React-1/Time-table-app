import React from 'react'

export const TableHead = ({days}) => {
    const ret=days.map((day,key)=>{return <th key={key}>{day}</th>})
  return (
    <thead>
        <tr>
        {ret}
        </tr>
    </thead>
  )
}
