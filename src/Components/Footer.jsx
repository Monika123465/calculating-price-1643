import { Grid,Text,Box,Heading,Container,Input } from '@chakra-ui/react'


function Footer(){
    return<>
 <Container  maxWidth="100%"
 border="-moz-initial"
 
 >

<Grid templateColumns='repeat(5, 1fr)' gap={3}>
  <Box>
    <Heading>Support</Heading>
    <Text>Contact</Text>
    <Text>Help Center</Text>
    <Text>IP Allowlist</Text>
    <Text>Site Map</Text>
    <Text>Download Pluralsight</Text>
    <Text>Skills Plans</Text>
    <Text>Flow Plans</Text>
  </Box>
  <Box>
  <Heading>Community</Heading>
    <Text>Guides</Text>
    <Text>Teach</Text>
    <Text>Partner with Pluralsight</Text>
    <Text>Affilate Partners</Text>
    <Text>PluralsightOne.org</Text>
    <Text>Authors</Text>
    
  </Box>
  <Box>
  <Heading>Company</Heading>
    <Text>About Us</Text>
    <Text>Careers</Text>
    <Text>Newsroom</Text>
    <Text>Resources</Text>
    
    
  </Box>
  <Box>
  <Heading>Industries</Heading>
    <Text>Public Sector</Text>
    <Text>Non-Profit</Text>
    </Box>
    <Box><Heading>Newsletter</Heading>
    <Text>
        Sign up with your email to join our mailing list

    </Text>
    <Heading>Email Address</Heading>
    <Input type="email" />
    <Container>
        
    </Container>
    </Box>
  
</Grid>
 </Container>
    
    </>
}
export default Footer