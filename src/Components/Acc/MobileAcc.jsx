
import React, { useState } from 'react'
import { useContext } from 'react'
import { AppContext } from '../../Context/AppContext';
import SliderImages from '../Homepage/SliderImages';
import TwoImages from '../Homepage/TwoImages';
import Loading from '../Loading/Loading';

function MobileAcc() {

  const { data } = useContext(AppContext)
  // for products
  const path = "/AccData"



  // is Loading   // 
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false)

  }, 1500);


  // console.log(data)

  if (isLoading) {

    return (


      <Loading />


    )

  }

  return (

    <div style={{ backgroundColor:"#fff"}} >
      <SliderImages data={data.SliderData.acc} path={path} />
      <TwoImages img1={data.longDiv.acc}
        img2={data.smallProduct.acc}
        path={path}
      />
      {/* SLIDER PENDING */}


      {/* <PopularCat data={data.PopularCat.acc} path={path}   /> */}
      <SliderImages data={data.SliderData.acc2} path={path} />


      {/* <StoopidCollection4D data={data.DiscountProduct.acc}  path={path}  /> */}
      {/* SLIDER PENDING */}


    </div>


  )
}

export default MobileAcc;
