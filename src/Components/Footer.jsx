import { Grid, Text, Box, Heading, Container, Input, Checkbox, Button, Divider,Image } from '@chakra-ui/react'
import {  AiFillFacebook, AiOutlineTwitter, AiFillInstagram, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import {Link} from "react-router-dom"


function Footer() {
    return <>
        <Box
            sx={{ color: 'white', bg: "#181818", padding: "150px" }}
        >

            <Grid templateColumns='repeat(5, 1fr)' gap={3}>
                <Box>
                    <Heading  >Support</Heading>
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

                    <Checkbox defaultChecked>I would like to receive emails from Pluralsight</Checkbox>
                    
                     <Button color="white" width="140px" className='custom_button' >Subscribe</Button>
                     
                    <Grid templateColumns='repeat(5, 1fr)' padding="5" > <AiFillFacebook /><AiOutlineTwitter /><AiFillInstagram /><AiFillLinkedin /><AiFillYoutube /></Grid>
                </Box>

            </Grid>
            <Divider sx={{ p: 4, mb: 10 }} />
        
        <Grid templateColumns='repeat(3, 1fr)'
         >
            <Box  display="flex" justifyContent="center" gap="2rem">
            <Link to="/pluralsight"><Image width="80%"  src="https://www.pluralsight.com/content/dam/logo/pluralsight-footer-logo-icon.png"  alt="err"></Image></Link>
            <Text>Copyright @ 2004-2022 plural sight LLC. All right reserved</Text>
            </Box>
            <Box display="flex" justifyContent="center" gap="2rem"
            >
            <Text>Detuch</Text>
            <Text>English</Text>
            <Text>French</Text>
            </Box>
            <Box  display="flex" justifyContent="center" gap="2rem"  > 
            <Text>Terms of Use</Text>
            <Text>Privacy Notice</Text>
            <Text>Modern Slavery Act Transparency Statement</Text>
            </Box>
        </Grid>
        </Box>

    </>
}
export default Footer