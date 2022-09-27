import { Link } from "react-router-dom"
import {
    Container, Box, Text, Image, Button
} from "@chakra-ui/react"

function Navbar() {
    return (
        <>
            <Container
                maxWidth="100%"
                display="flex"
                justifyContent="space-around"
                textAlign="center"
                
                maxHeight="50px"
                bg='black' color='white'
            >
                <Container
                    maxWidth="10%"
                    textAlign="center"
                >
                    <Link to="/pluralsight"><Image src='https://www.pluralsight.com/content/dam/ps-nav-assets/pluralsight-company-white-logo.png' alt='error'></Image></Link>

                </Container>
                <Container
                    maxWidth="40%"
                    display="flex"
                    gap="2rem"
                    textAlign="center"
                    
                    justifyContent="center"
                >
                    <Link to="/pluralsight"><Text>PluralSight</Text></Link>
                    <Link to="/skills"><Text>Skills</Text></Link>
                    <Text>Flow</Text>
                    <Text>Blog</Text>
                    <Box maxWidth="100%"
                        display="flex"
                        justifyContent="space-around"
                        textAlign="center"
                        border="1px solid black"
                        gap='0.5rem'
                    ><Link to="/signin"><Image src='https://www.pluralsight.com/content/dam/ps-nav-assets/nav-profile-image.svg' alt='Dan Abramov'></Image></Link>
                        <Link to="/signin"><Text>Signin</Text></Link>
                    </Box>
                </Container>
            </Container>

            <Container
                maxWidth="100%"
                display="flex"
                justifyContent="space-around"
                textAlign="center"
                
                maxHeight="150px"
                bg='#424242' color='white'
                box-shadow= "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
            >
                <Container
                    maxWidth="40%"
                    display="flex"
                    gap="2rem"
                    textAlign="center"
                
                    justifyContent="center"
                >

                    <Link to="/skills"><Image src='https://www.pluralsight.com/content/dam/ps-nav-assets/product-logo/pluralsight-skills-color-logo.svg' alt='error'></Image></Link>


                    <Link to="/courses"><Text>Courses</Text></Link>
                    <Link to="/skills"><Text>WhySkills?</Text></Link>
                    <Text>View Plans</Text>
                    <Link to="/"><Text>For individuals</Text></Link>


                </Container>
                <Container
                    maxWidth="20%"
                    display="flex"
                    gap="1rem"
                    textAlign="center"
                    
                    justifyContent="center"
                    marginRight="27rem"
                >

                    <Image maxWidth="5%" src='https://www.shutterstock.com/image-vector/white-magnifying-glass-icon-isolated-600w-1573346785.jpg' alt='error'></Image>

                    <Button color="white" width="140px" border="1px solid white" bg="black" borderRadius="none">Contact sales</Button>
                    <Button color="white" width="140px" border="1px solid white" bg="black" borderRadius="none">Try for free</Button>




                </Container>

            </Container>

            <Box maxWidth="container.5m" height={32}
            
            >
                 <img Width="100%" height="150px" src="https://www.pluralsight.com/content/dam/pluralsight2/offer/2022/cloud-certification/hero.png" alt="error" 
                />
            </Box>

        </>


    )
}

export default Navbar