import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import {  useParams,useNavigate } from 'react-router-dom';
import {UpdateFood} from '../../state'
export const Form = () => {
  const [food,setFood]=useState("");
  const id=useParams();
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const formhandler=(e)=>{
    e.preventDefault();
    const [x,y]=id.id.split(" ");
    dispatch(UpdateFood({x,y,food}));
    navigate('/');
  }
  return (
    <div>
        <form onSubmit={(e)=>{formhandler(e)}}>
            <label>Value</label>
            <input type="search" required autoFocus value={food} onChange={(e)=>{setFood(e.target.value)}}></input>
            <input type="submit" value='update cell'></input>
        </form>
    </div>
  )
}
