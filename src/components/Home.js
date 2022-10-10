import React from 'react'

const Home = (props) => {
    console.log("home",props.carddata.length)
  return (
    <div>
    <div className="addtocart">
    <span className="noofitems">{props.carddata.length}</span>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdHkPW4rSaI-Ir33ZeNRIDw1HaEHDwe_1W_OrE8xmn&s" alt="" />     
           </div>
    <h1>home component</h1>
    <div className='cart-wrapper'>
    <div className='img-wrapper item'>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh8DPWkRGmEDfVos33jlr_HGcvbRCkPvwawg&usqp=CAU
    " alt="adfd" />

    </div>
    <div className='text-wrapper item'>
    <span>I-phone</span>
    <span>price 10000</span>

    </div>
    <div className='btn-wrapper item'>
    <button onClick={()=>props.addToCartHandler({price:1000,name:"iphone 13"})}>add to caRT</button>

    </div>


    </div>
      
    </div>
  )
}

export default Home
