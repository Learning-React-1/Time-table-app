import {UPDATE_FOOD} from './foodTableActions'
export function UpdateFood(newfood){
    console.log(newfood)
    return {type:UPDATE_FOOD,payload:newfood}
}