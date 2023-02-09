import React, { useContext, useEffect, useState } from 'react'
// import { useEffect } from 'react'
import { Divider, Flex, Button, ButtonGroup, HStack, SimpleGrid, Spacer, Stack, Text, VStack, Wrap } from '@chakra-ui/react'
import { AppContext } from '../../Context/AppContext';
import Loading from '../Loading/Loading';
import TwoImages from '../Homepage/TwoImages';

import ProductCard from '../Men/ProductCard';



const WomensData = () => {


  const { data, AllProductsData } = useContext(AppContext)
  const [womenData, setwomenData] = useState([])
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false)

  }, 1500);


  // console.log(data)



  useEffect(() => {
    setwomenData(AllProductsData.womenData)

  }, [womenData])
  // useEffect(() => {
  //   setmenData(AllProductsData.menData)
  // }, [mendata])

  const PriceSortlow = () => {

    const SortedData = AllProductsData.womenData.sort(function (a, b) {
      return a.price - b.price;
    });

    setwomenData([...SortedData])
  }

  const PriceSorthigh = () => {

    const SortedData = AllProductsData.womenData.sort(function (a, b) {
      return b.price - a.price;
    });

    setwomenData([...SortedData])
  }

  if (isLoading) {

    return (
      <Loading />
    )

  }

  return (

    <Stack style={{ backgroundColor: "#fff", color: "#000" }} >

      <TwoImages
        img3={data.giftVoucher.forAll} />
      <Wrap justify='center'   >
        <Text color="gray.500" fontWeight="bold" > HOME / WOMEN /   PRODUCTS </Text>
        <Divider orientation='horizontal' />

        <VStack>


          <Text align="center" fontSize="20" fontWeight="bold" >Women Clothing</Text>

          <ButtonGroup size='sm' isAttached variant='outline'>
            {/* <IconButton onClick={PriceSortlow} aria-label='Add to friends' icon={< ChevronDownIcon boxSize={8} />} /> */}
            <Button fontSize={18} onClick={PriceSorthigh}   >SORT BY PRICE</Button>
            {/* <IconButton onClick={PriceSorthigh} aria-label='Add to friends' icon={<ChevronUpIcon boxSize={8} />} /> */}
          </ButtonGroup>


          {/* <HStack width="1200px" >
            <Text color="gray.500" fontWeight="bold" > FILTER </Text> <Spacer />
            <Text color="gray.500" fontWeight="bold" > CLEAR ALL</Text>
          </HStack> */}

        </VStack>


        <HStack spacing={50} width="1200px" justify="stretch"  >
          <SimpleGrid spacing={5} columns={[1, 2, 2, 3]}>

            {AllProductsData.womenData.map((el) => (
              <ProductCard  {...el} />
            ))}



          </SimpleGrid>
        </HStack>

      </Wrap>
    </Stack>



  )
}

export default WomensData;
