import {
  Box,
  Image, Input, Text, Button, Divider

} from '@chakra-ui/react';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authContext } from '../context/authContext';


function CreateLogin() {
  const [username, setUsername] = useState('')
  const [dob, setDob] = useState()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('')

  const { signUp } = useContext(authContext)

  const navigate = useNavigate()
  const handleSignup = () => {
    signUp({ username, password, dob, email, password, phone })
    alert('user created succesfully');
    navigate('/signin');
  }



  return (<Box width="100%" color="white" sx={{ backgroundImage: '/signin.jpg' }}  >

    <Box width="40%" box-shadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" bg="black" padding="140px" margin="auto" >
      <Image margin="auto" width="50%" src="https://app.pluralsight.com/id/img/login-logo.png" />

      <Text className='custom_text' marginTop="60px">Username </Text>
      <Input className='custom_text' type="text" value={username} onChange={(e) => setUsername(e.target.value)} />

      <Text className='custom_text' marginTop="60px">Date of birth </Text>
      <Input className='custom_text' type="number" value={dob} onChange={(e) => setDob(e.target.value)} />

      <Text className='custom_text' marginTop="60px">Email </Text>
      <Input className='custom_text' type="text" value={email} onChange={(e) => setEmail(e.target.value)} />

      <Text className='custom_text' marginTop="30px">Password</Text>
      <Input className="custom_text" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

      <Text className='custom_text' marginTop="60px">Phone Number </Text>
      <Input className='custom_text' type="number" value={phone} onChange={(e) => setPhone(e.target.value)} />

      <Button width="100%" colorScheme="facebook" marginTop="40px" onClick={handleSignup}  >Create an account</Button>

      <Text color="#385898" marginTop="20px">don't have an account</Text>
      <Text color="#385898" marginTop="20px">Sign up  with company or school</Text><Divider marginTop="40px" />


      <Box ><Text marginTop="100px">Copyright © 2004 - 2022 Pluralsight LLC. All rights reserved.</Text>
      </Box>
      <Box width="60%" display="flex" marginTop="10px" margin="auto"><Text  >Privacy policy.</Text>
        <Text >Terms of use</Text>
      </Box>


    </Box>
  </Box>
  )


}

export default CreateLogin