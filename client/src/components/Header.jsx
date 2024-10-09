import {  Divider, Heading, HStack, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import {Search2Icon} from '@chakra-ui/icons'

const Header = () => {

  return (

   <>
   
 

<HStack w='100vw' justify='space-between'  p={5}  >   

<Heading as='h4'>BR.<span style={{color:'#f2f0ea'}}>F</span></Heading>

<InputGroup borderRadius={5} height='50%' alignItems='center'  >
    <InputLeftElement pb={1}>
    <Search2Icon color='gray.300' fontSize='small' />
    </InputLeftElement>
    <Input  variant='outlined' focusBorderColor="transparent"  type='text' size='sm' placeholder='search...' />
  </InputGroup>

</HStack>



<Divider />

   
   
   </>

  )
}

export default Header
