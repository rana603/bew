import { Button, Divider, FormControl, FormLabel, HStack, Image, Input, PinInput, PinInputField, Text, VStack} from '@chakra-ui/react'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../Context/AppContext'


const PaymentForm = () => {


    const {cartDataEmpty, price} = useContext(AppContext)

    const navigate = useNavigate()

    const PaymentDone = ()=>{

        prompt()
        alert("Payment Successfull")
        navigate("/OrderSuccessfull")
        cartDataEmpty()

    }

    

  return (
    
    <>
    
    <VStack spacing={5}  backgroundColor="#fff" color="#000" width="100%" padding="3rem 3rem"  >

        <Text fontWeight="bold" fontSize="xl"  >Choose your payment method</Text>

        <HStack spacing={5}  >

           <VStack marginTop="-240px" width={300} align="flex-start" padding={5}  bg="#eeeeee"
           >

            <HStack  >
                <Image w={25} src="https://images.bewakoof.com/web/bank-card-fill-1645697857.svg" />
                <Text>Debit/Credit Card</Text>
            </HStack>
            
            <Divider/>

            
            <HStack>
                <Image w={25} src="https://images.bewakoof.com/web/Group-1645705428.png" />
                <Text>WALLET</Text>
            </HStack>
            
            <Divider/>
            <HStack>
                <Image w={25} src="https://images.bewakoof.com/web/upi-icon-1645705429.png" />
                <Text>UPI</Text>
            </HStack>
            
            <Divider/>
            <HStack>
                <Image w={25} src="https://images.bewakoof.com/web/nb-icon-1645705428.png" />
                <Text>NET BANKING</Text>
            </HStack>
            
            <Divider/>
            <HStack>
                <Image w={25} src="https://images.bewakoof.com/web/cod-icon-1645705427.png" />
                <Text>CASH ON DELIVERY</Text>
            </HStack>
            
            <Divider/>


            </VStack>
 




            <VStack align="flex-start" spacing={5} padding={5}  >
             
           
             <VStack>
             <HStack>
             <FormControl  >
               <FormLabel>First Name</FormLabel>
               <Input size="sm" border="2px solid gray" />
             
             </FormControl>
             <FormControl  >
               <FormLabel>Last Name</FormLabel>
               <Input size="sm" border="2px solid gray" />
               
             </FormControl>
             </HStack>

             <FormControl  >
               <FormLabel>Address</FormLabel>
               <Input size="sm" border="2px solid gray" />
              
             </FormControl>

             <HStack>
             <FormControl  >
               <FormLabel>City</FormLabel>
               <Input size="sm" border="2px solid gray" />
             
             </FormControl>
             <FormControl  >
               <FormLabel>State</FormLabel>
               <Input size="sm" type="city" border="2px solid gray" />
               
             </FormControl>
             </HStack>
             </VStack>

              
             <Divider/>
               
            <VStack>

                <HStack width="full" >
                 <FormControl  >
                   <FormLabel>Card Number</FormLabel>
                   
                   <Input size="sm" w={280} border="2px solid gray" />
                 
                 </FormControl>

                 <FormControl >
                   <FormLabel>CVV</FormLabel>
                   <HStack width="full" >

                 <PinInput size="sm">
                   <PinInputField  border="2px solid gray"  />

                   <PinInputField  border="2px solid gray"  />
                   <PinInputField  border="2px solid gray"  />
                 </PinInput>
               </HStack>
                   
                 </FormControl>

                 
                 </HStack>

                 <HStack>
             <FormControl  >
               <FormLabel>Exp MOnth</FormLabel>
               <Input size="sm" border="2px solid gray" />
             
             </FormControl>
             <FormControl  >
               <FormLabel>Exp Year</FormLabel>
               <Input size="sm" border="2px solid gray" />
               
             </FormControl>
             </HStack>

             <Button style={{marginTop:"20px"}}  onClick={PaymentDone} fontSize="x" padding={3} w="full" colorScheme='yellow'> PAY ₹{price} </Button>


               
            </VStack>



                          
            


             
             
             </VStack>
             
    
        
        </HStack>


    </VStack>
    
    </>
    
  )
}

export default PaymentForm;
