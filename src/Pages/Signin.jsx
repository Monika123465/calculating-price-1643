


import {
   Box,
   Image,Input,Text,Button,Divider
  
  } from '@chakra-ui/react';
  
   function Signin() {
    return (
      
      <Box Box  width="100%"  color="white" display="flex" >
        
        <Box  width="50%"  box-shadow= "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" bg="black"  padding="140px" >
          <Image margin="auto" width="50%" src="https://app.pluralsight.com/id/img/login-logo.png"/>
          <Text className='custom_text'   marginTop="60px">Email or Username</Text>
          <Input className='custom_text' />
          <Text className='custom_text'  marginTop="30px">Password</Text>
          <Input   />
          <Button colorScheme="facebook" width="100%"  marginTop="20px">Sign in</Button>

          <Text color="#385898"  marginTop="20px">Forget Password</Text>
          <Text color="#385898"  marginTop="20px">Sign in with company or school</Text><Divider  marginTop="40px"/>
          <Button width="100%" color="white" bg="black" border="1px solid white"  marginTop="40px">Create an account</Button>

          <Box ><Text   marginTop="100px">Copyright © 2004 - 2022 Pluralsight LLC. All rights reserved.</Text>
        </Box>
        <Box  width="60%" display="flex"   marginTop="10px" margin="auto"><Text  >Privacy policy.</Text>
          <Text >Terms of use</Text>
          </Box>
          

        </Box>
        
        
        
        <Box sx={{ backgroundImage:'/signin.jpg' }} width="100%" >
            <Text margin="auto" marginTop="350px" fontSize="45px">Let's create the future together</Text>
            <Button width="30%" color="white"  marginTop="20px"  bg="black"  border="1px solid white">start a free 10-day trial</Button>

        
        </Box>
    </Box>
      
    );
  }

export default Signin