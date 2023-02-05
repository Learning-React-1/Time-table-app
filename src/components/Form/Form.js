import React from 'react'
import { useLocation, useParams } from 'react-router-dom';
export const Form = () => {
  const id=useParams();
  const formhandler=(e)=>{
    e.preventDefault();
    const [x,y]=id.id.split(" ");
  }
  return (
    <div>
        <form action='/' onSubmit={(e)=>{e.preventDefault();formhandler(e)}}>
            <label>Value</label>
            <input type="search" autoFocus></input>
            <input type="submit"></input>
        </form>
    </div>
  )
}
