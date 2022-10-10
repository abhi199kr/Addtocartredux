import React from 'react'
import {connect} from 'react-redux'
import Home from '../components/Home'
import { addtocart } from '../services/Action/action'



const mapStateToProps=state=>({
    // carddata:state
    
    carddata:state.carditems
    // data:state
})
const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(addtocart(data))

})
export default connect(mapStateToProps,mapDispatchToProps)(Home)


