
import { Addtocart } from "../constant"
const initialstate={
    carddata:[]
}
export default function carditems(state=[],action){
    switch(action.type){
        case Addtocart:
            console.log("Redcucer",action)
            return[
                ...state,
                {carddata:action.data}
            ]
           
            default:
                return state

    }

}