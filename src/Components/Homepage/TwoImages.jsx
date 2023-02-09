import React from 'react'
import { Grid, Image, VStack } from '@chakra-ui/react'

import { useNavigate } from 'react-router-dom'


function TwoImages({img1, img2, img3, path})  {
    const Navigation = useNavigate()
  return (
    <>
     <br />   
     <VStack  spacing={5} >

          <Image w="full" src={img1}  style={{cursor:"pointer" ,marginTop:"-10px"}} onClick={()=>Navigation(path)} />
          <Grid justifyContent="center">
          
             <Image src={img2} style={{cursor:"pointer"}} onClick={()=>Navigation(path)}  />
          </Grid >
          <Image w="full" src={img3} style={{cursor:"pointer"}} onClick={()=>Navigation(path)}  />
     </VStack>
     </>
  )
}

export default TwoImages
