import { Addtocart } from "../constant"
export const addtocart=(data)=>{
    console.log("action",data)
    return{
        type:Addtocart,
        data:data
    }

}
export const removetocart=(data)=>{
    return{
        type:"removee=cart",
        data:data
    }

}