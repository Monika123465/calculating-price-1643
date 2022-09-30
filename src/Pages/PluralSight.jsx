import { Box, Heading, Text, Button, Image, Grid, Container, Center, Divider } from "@chakra-ui/react"
import { AiOutlineRight } from "react-icons/ai";
import Courses from "./Courses";


function PluralSight() {
    return (
        <>
            <Box className="custom_box"  >
                <Box
                    className="custom_Box">
                    <Heading>Pluralsight empowers you to</Heading>
                    <Heading>upgrade your skills</Heading>
                    <Text fontSize="25px" marginTop="15px" >Develop critical tech skills. Cut cycle times. Build happier, healthier
                    </Text> <Text marginBottom="15px" fontSize="25px"> tech teams. And transform your goals into gains. All with Pluralsight.</Text>
                    <Button className="custom_button">View plans</Button>
                    <Box display="flex" gap="6rem" paddingTop='6rem'>
                        <Box>
                            <Image src="/pink-woman.webp" alt="err" /></Box>
                        <Box>
                            <Image src="https://www.pluralsight.com/content/dam/pluralsight2/homepage/2022-webp/man-in-black-flow.webp" alt="err" /> </Box>

                    </Box>
                </Box>


                <Text marginTop="2rem" >Organizations we’ve helped:</Text>
                <Grid templateColumns='repeat(5, 1fr)' width="70%" margin="auto" padding="4rem" gap="4rem">
                    <Image Width="200px" src="https://www.pluralsight.com/content/dam/pluralsight2/homepage/2022-webp/organization-logos/dell-logo.webp" alt="err" />
                    <Image Width="100px" src="https://www.pluralsight.com/content/dam/pluralsight2/homepage/2022-webp/organization-logos/ge-logo.webp" alt="err" />
                    <Image Width="100px" src="https://www.pluralsight.com/content/dam/pluralsight2/homepage/2022-webp/organization-logos/fedex-logo.webp" alt="err" />
                    <Image Width="100px" src="https://www.pluralsight.com/content/dam/pluralsight2/homepage/2022-webp/organization-logos/ford-logo.webp" alt="err" />
                    <Image Width="50px" src="https://www.pluralsight.com/content/dam/pluralsight2/homepage/2022-webp/organization-logos/bt-logo.webp" alt="err" />

                </Grid>

            </Box>


            <Container maxWidth="82%" display="flex" fontSize="20px" padding="6rem" bg="white" color="black">
                <Box width="55%" height="400px" margin="auto">

                    <Heading fontSize="45px" fontWeight="bold" textAlign="left" >
                        Why Pluralsight?
                    </Heading>
                    <Text textAlign="left">
                        Whether you’re an individual looking to learn Python to advance your
                        career or an enterprise team looking to cut cycle times, speed up
                        onboarding, or give your teams the skills to realize your strategies,
                        we remove the challenges and roadblocks slowing you down. We’re advancing
                        the world’s tech workforce, and that starts with making your work more
                        efficient and effective—and giving you more to celebrate. </Text>
                    <Button className="custom_button" display="block" width="30%" height="50px" border='1px solid white' color="white" marginBottom="40px" marginTop="40px" >See our solution</Button>
                </Box>
                <Center >
                    <Image height="380px" width="100%" src="https://www.pluralsight.com/content/dam/pluralsight2/homepage/2022-webp/why-pluralsight.webp" alt="err" />
                </Center>

            </Container>



            <Container maxWidth="100%" bg="#f8f8f8" padding="20px" paddingBottom="20px">
                <Heading marginTop="2rem" marginBottom="1rem" fontSize="25px" >Products </Heading>
                <Box display="flex" margin="auto" gap="2rem" maxWidth="70%" justifyContent="space-evenly" marginTop="1rem" padding="2rem"  >
                    <Box width="40%" box-shadow="rgba(149, 157, 165, 0.2) 0px 8px 24px" bg="white" padding="20px" borderRadius="20px">
                        <Image src="https://www.pluralsight.com/content/dam/pluralsight2/homepage/2022-webp/skills-badges.webp" alt="err" />
                        <Image marginTop="20px" src="https://www.pluralsight.com/content/dam/pluralsight2/product/logo-skills-black.png" alt="err" />
                        <Text className="custom_text">Empower yourself or your team to develop the skills
                            critical to delivering on your career goals and
                            initiatives with our tech skills platform.</Text>
                        <Text className="custom_text">View all courses</Text><Divider />
                        <Text className="custom_text">For individuals</Text><Divider />
                        <Text className="custom_text">Take a skill assessment</Text><Divider />
                        <Text className="custom_text">View plans</Text><Divider />
                        <Button className="custom_button" display="block" width="30%" height="50px" border='1px solid white' color="white" marginBottom="40px" marginTop="40px" >Explore Skills</Button>
                    </Box>
                    <Box width="40%" box-shadow="rgba(149, 157, 165, 0.2) 0px 8px 24px" bg="white" padding="20px" borderRadius="20px">
                        <Image src="https://www.pluralsight.com/content/dam/pluralsight2/homepage/2022-webp/flow-dashboard.png" alt="err" />
                        <Image marginTop="20px" src="https://www.pluralsight.com/content/dam/pluralsight2/product/logo-flow-black.png" alt="err" />
                        <Text className="custom_text">Unlock your team’s potential and upgrade your processes
                            with our software delivery intelligence platfor</Text>
                        <Text className="custom_text" >View Flow features</Text><Divider />
                        <Text className="custom_text">Take a tour</Text><Divider />
                        <Text className="custom_text">Contact sales</Text><Divider />
                        <Text className="custom_text">View plans</Text><Divider />
                        <Button className="custom_button" display="block" width="30%" height="50px" border='1px solid white' color="white" marginBottom="40px" marginTop="40px" >Explore Flow</Button>
                    </Box>
                </Box>
            </Container>


            <Box maxWidth="100%" bg="black" color="white" padding="80px">

                <Box width="60%" margin="auto">
                    <Text className="custom_text">Our Solutions</Text>
                    <Heading className="custom_text">Face the future with confidence</Heading>
                    <Text className="custom_text">Transform your technology workforce.
                        One developer. One delivery. One success <br></br>at a time.
                        Here's how we enable you to conquer the challenges
                        you're facing:</Text>
                    <Text className="custom_text" color="#ec008c">See all solutions</Text>
                    <Box display="flex" gap="6rem" >
                        <Box width="50%" marginTop="20px"  >
                            <Text className="custom_text" marginBottom="10px" >Engineering onboarding</Text><Divider />
                            <Text className="custom_text" marginBottom="10px" >Software delivery</Text><Divider />
                            <Text className="custom_text" marginBottom="10px" >Tech fluency</Text><Divider />
                            <Text className="custom_text" marginBottom="10px" >Cloud transformation</Text><Divider />
                            <Text className="custom_text" marginBottom="10px" >Upskilling/reskilling</Text><Divider />
                            <Text className="custom_text" marginBottom="10px" >Aglie transformation</Text><Divider />
                        </Box>
                        <Image width="450px" src="https://www.pluralsight.com/content/dam/ps-dam/images/solutions-custom-accordion/webp/engineer-onboarding.webp" alt="err" />
                    </Box>
                </Box>
            </Box>



            <Container maxWidth="100%" bg="#f8f8f8" padding="20px" paddingBottom="20px">
                <Heading marginTop="2rem" marginBottom="1rem" fontSize="25px" >What our customers are saying </Heading>
                <Text>A word from our partners</Text>
                <Box display="flex" margin="auto" gap="2rem" maxWidth="70%" justifyContent="space-evenly" marginTop="1rem" padding="2rem"  >
                    <Box width="30%" box-shadow="rgba(149, 157, 165, 0.2) 0px 8px 24px" bg="white" padding="20px" borderRadius="20px">
                        
                        <Image marginTop="20px" src="https://www.pluralsight.com/content/dam/pluralsight2/homepage/2022-webp/customer-avatars/deutsche-bank-avatar.webp" alt="err" />
                        <Text className="custom_text"  marginBottom="70px">“As a bank, we have a commitment to ensure that we have the right
                         skills and competencies to become a truly digital organization.
                        </Text>
                        <Text className="custom_text" color="#ec008c">Helen Tippell</Text>
                        <Text className="custom_text">IB Technology Chief Architect and CTO, Deutsche Bank</Text>
                        
                        </Box>
                        <Box width="30%" box-shadow="rgba(149, 157, 165, 0.2) 0px 8px 24px" bg="white" padding="20px" borderRadius="20px">
                        
                        <Image marginTop="20px" src="https://www.pluralsight.com/content/dam/pluralsight2/homepage/2022-webp/customer-avatars/nomura-avatar.webp" alt="err" />
                        <Text className="custom_text" marginBottom="70px">“This really has changed the game, in terms of the way we view the 
                                delivery of technology and how we can work with our business
                                 users to try these ideas and then move forward.”
                            </Text>
                        <Text className="custom_text"  color="#ec008c">Terry Learmouth</Text>
                        <Text className="custom_text">EMEA CIO, Nomura</Text>
                        
                        </Box>
                        <Box width="30%" box-shadow="rgba(149, 157, 165, 0.2) 0px 8px 24px" bg="white" padding="20px" borderRadius="20px">
                        
                        <Image marginTop="20px" src="https://www.pluralsight.com/content/dam/pluralsight2/homepage/2022-webp/customer-avatars/thomson-reuters-avatar.webp" alt="err" />
                        <Text className="custom_text" marginBottom="70px">"We started streamlining so there’s more time for developers to actually focus on their task.<br></br>
                         The biggest surprise was the change in coding days—it 
                         jumped from 2.3 to 3 almost immediately.”
                            
                        </Text>
                        <Text className="custom_text"  color="#ec008c">Abesh Rajasekharan</Text>
                        <Text className="custom_text">Director of Technology, Thompson Reuters</Text>
                        
                        </Box>
                     </Box>
            </Container>


            <Container maxWidth="82%" display="flex" fontSize="20px" padding="6rem" bg="white" color="black">
                <Box width="35%"  margin="auto">
                    <Image  width="15%" src="https://www.pluralsight.com/content/dam/pluralsight2/one/psone-logo.png" alt="err"></Image>

                    <Heading fontSize="45px" fontWeight="bold" textAlign="left" >
                    See our growth, progress, and evolution
                    </Heading>
                    <Text textAlign="left">
                    At Pluralsight, we see firsthand every day how technology
                     makes the impossible possible. It’s why Pluralsight One exists:
                     to accelerate our mission of advancing the world’s tech workforce,
                     challenging assumptions about solutions, and creating significant,
                     lasting social impact.
                        </Text>
                    <Button className="custom_button" display="block" width="30%" height="50px" border='1px solid white' color="white" marginBottom="40px" marginTop="40px" >For non-profits</Button>
                </Box>
                <Center >
                    <Image  width="100%" src="/collage.webp" alt="err" />
                </Center>

            </Container>

          
           
            <Container maxWidth="100%" bg="#f8f8f8" padding="20px" paddingBottom="20px">
             
                <Box display="flex" margin="auto" gap="2rem" maxWidth="70%" justifyContent="space-evenly" marginTop="1rem" padding="6rem"  >
                    <Box width="70%" box-shadow="rgba(149, 157, 165, 0.2) 0px 8px 24px" bg="#3e1f2c" padding="20px" borderRadius="20px" color="white" >
                    <Heading marginTop="2rem" marginBottom="1rem" fontSize="25px" >Ready to get started with  pluralsight Skills?</Heading>
                        <Text >Develop better. Deliver better.</Text>
                        <Box display='flex' gap="1rem" width="80%"  margin="auto">
                        <Button className="custom_button"   >View Individual plans</Button> 
                        <Button className="custom_button"   >view team plans</Button>
                        </Box>
                    </Box>
                    <Box width="70%" box-shadow="rgba(149, 157, 165, 0.2) 0px 8px 24px"  bg="#144f70"  padding="20px" borderRadius="20px" color="white">
                    <Heading marginTop="2rem" marginBottom="1rem" fontSize="25px" >Ready to get started with Pluralsight Flow? </Heading>
                        <Text >Unlock your people. Upgrade your processes..</Text>
                       
                        <Button className="custom_button"  marginTop="40px" >Contact sales</Button>
                    </Box>
                </Box>
            </Container>





        </>
    )


}

export default PluralSight