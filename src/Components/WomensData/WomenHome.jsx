
import React, { useState } from 'react'
import { useContext } from 'react'
import { AppContext } from '../../Context/AppContext'
import SliderImages from '../Homepage/SliderImages'
import TwoImages from '../Homepage/TwoImages'
import Loading from '../Loading/Loading'







function WomenHome (){

  const {data} = useContext(AppContext)


    // for products
 const path = "/WomensData/WomenHome"


 
 // is Loading   // 
 const [isLoading, setIsLoading] = useState(true);

 setTimeout(() => {
  setIsLoading(false)
 
 },1000);
  

 // console.log(data)

 if(isLoading){

  return (
  
    
     <Loading/>
   

    ) 

 }

  return (

    <div style={{backgroundColor:"#fff",color:"#000"}} >
   
   
   <SliderImages data={data.SliderData.women}  path={path}   />
   <TwoImages img1={data.longDiv.women} img2={data.smallProduct.women} img3={data.giftVoucher.forAll}  path={path}   />

   {/* <PopularCat data={data.PopularCat.women}   path={path}  /> */}

   {/* <DiscountProduct data={data.DiscountProduct.women} path={path} /> */}

  



   <SliderImages data={data.SliderData.women2}  path={path}  />


   {/* <StoopidCollection4D data={data.DiscountProduct.stoopidWomen}  path={path}  /> */}

        {/* SLIDER PENDING */}

  


   <TwoImages img1={data.longDiv.men2} 
   img3={data.longDiv.men3} 
   path={path} 
   />
    </div>


  )
}

export default WomenHome
