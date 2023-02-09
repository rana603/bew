import React, { useContext, useState } from 'react'
import { AppContext } from '../../Context/AppContext';

import Loading from '../Loading/Loading';
import SliderImages from './SliderImages'
import TwoImages from './TwoImages'

function Home() {
  const { data } = useContext(AppContext);
  const [isLoading, setIsLoading] =useState(true);

  setTimeout(() => {
    setIsLoading(false)

  }, 1500);

  if (isLoading) {

    return (
      <Loading/>
    )

  }
  return (
    <div  style={{backgroundColor:"#fff"}}>
      <SliderImages  data={data.SliderData.men} />
      <TwoImages img1={data.longDiv.men}
        img2={data.smallProduct.men}
        img3={data.giftVoucher.forAll} />
    </div>
  )
}

export default Home
