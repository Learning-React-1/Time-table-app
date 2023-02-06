import {UPDATE_FOOD} from './foodTableActions'

export const foodTableReducer = (state=initialState,action) => {
  switch(action.type){
    case UPDATE_FOOD:
        const newstate=state.map((curr)=>{
            let ret={};
            ret.row=curr.row;
            ret.valuesofrow=curr.valuesofrow.map((minicurr)=>{return {...minicurr}})
            return ret;
        })
        newstate[action.payload.x-1].valuesofrow[action.payload.y-1].todayfood=action.payload.food;
        console.log(newstate)
        return newstate;
    default:
        return state;
  }
}

const initialState=[
    {row:1,valuesofrow:[
        {
            column:1,
            todayfood:"dosa"
        },
        {
            column:2,
            todayfood:"dosa"
        },
        {
            column:3,
            todayfood:"dosa"
        },
        {
            column:4,
            todayfood:"dosa"
        },
        {
            column:5,
            todayfood:"dosa"
        },
        {
            column:6,
            todayfood:"dosa"
        },
        {
            column:7,
            todayfood:"dosa"
        }
    ]},
    {row:2,valuesofrow:[
        {
            column:1,
            todayfood:"dosa"
        },
        {
            column:2,
            todayfood:"dosa"
        },
        {
            column:3,
            todayfood:"dosa"
        },
        {
            column:4,
            todayfood:"dosa"
        },
        {
            column:5,
            todayfood:"dosa"
        },
        {
            column:6,
            todayfood:"dosa"
        },
        {
            column:7,
            todayfood:"dosa"
        }
    ]},
    {row:3,valuesofrow:[
        {
            column:1,
            todayfood:"dosa"
        },
        {
            column:2,
            todayfood:"dosa"
        },
        {
            column:3,
            todayfood:"dosa"
        },
        {
            column:4,
            todayfood:"dosa"
        },
        {
            column:5,
            todayfood:"dosa"
        },
        {
            column:6,
            todayfood:"dosa"
        },
        {
            column:7,
            todayfood:"dosa"
        }
    ]}
]
