import {UPDATE_FOOD} from './foodTableActions'
function UpdateFood(newfood){
    return {type:UPDATE_FOOD,payload:newfood}
}