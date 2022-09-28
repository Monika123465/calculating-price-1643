import { Box, Container, Heading, Button, Image, Text, Center, Grid, Divider, } from "@chakra-ui/react"
import { AiOutlineDown } from "react-icons/ai";
function ForIndividual() {
    return (
        <Box bg="black" color="white">

            <Container maxWidth="88%" display="flex" fontSize="25px" padding="6rem" >
                <Box width="65%" height="400px" margin="auto">
                    <Text>FOR INDIVIDUALS</Text>
                    <Heading fontSize="65px" fontWeight="bold" textAlign="left" >
                        For Individuals: Build better skills
                    </Heading>
                    <Text textAlign="left">With the technology skills platform, you can see where your skills stand and master the latest in software development, IT ops, AI and machine learning, security and more. </Text>
                    <Button    display="block" width="30%" height="50px" border='1px solid white' color="white" marginBottom="40px" marginTop="40px"   className="custom_button">TRY FOR FREE</Button>
                </Box>
                <Center >
                    <Image height="380px" width="100%" src="https://www.pluralsight.com/content/dam/pluralsight2/individual/hero-individual-illustration.png" alt="err" />
                </Center>
            </Container>


            <Button width="80%" height="80px" border='1px solid white' color="white" marginTop="40px" margin="auto" gap="0.2rem" className="custom_button" >Serios skills.Simple pricing. <Heading>See Plans </Heading>< AiOutlineDown /></Button>


            <Box width="80%" textAlign="left" margin="auto" marginTop="2rem" color="white"> <Heading >Trending on Pluralsight</Heading></Box>
            <Container maxWidth="84%" display="flex" fontSize="25px" padding="2rem" textAlign="left" gap="2rem" marginTop="2rem">

                <Box bg="#222222">
                    <Image src='https://pluralsight.imgix.net/course-images/php-7-whats-new-v1.jpg?w=760' alt="err" />
                    <Text>Course</Text>
                    <Heading>What's New in PHP 7</Heading>
                </Box>
                <Box bg="#222222">
                    <Image src='https://pluralsight.imgix.net/course-images/java-12-whats-new-v1.jpg?w=760' alt="err" />
                    <Text>Course</Text>
                    <Heading>What's New in JAVA 12</Heading>
                </Box>
                <Box bg="#222222">
                    <Image src='https://pluralsight.imgix.net/course-images/java-8-whats-new-v1.jpg?w=760' alt="err" />
                    <Text>Course</Text>
                    <Heading >What's New in JAVA 8</Heading>
                
                </Box >
            </Container>
            <Button width="80%" height="40px" color="white" marginTop="20px" textAlign="left" gap="0.2rem" bg="#222222" display="block" margin="auto"  >view more courses</Button>


            <Box maxWidth="100%" margin="20px"  >

                <Container maxWidth="82%" display="flex" fontSize="20px" padding="4rem" bg="#222222" >
                    <Center >
                        <Image height="380px" width="70%" src="https://www.pluralsight.com/content/pluralsight/en/product/skills/individuals/jcr:content/main/generic_block_copy/parsys/generic_block_413530/parsys/animation_wrapper/parsys/columns_copy/column-parsys-1/generic_block_202764/parsys/columns_copy/column-parsys-2/generic_block_copy_c/parsys/image/image-res.img.7367216d-cffc-4818-97b9-979a20c13db4.png" alt="err" />
                    </Center>
                    <Box width="55%" height="400px" margin="auto">
                        <Text color="#ec008c ">OVERVIEW</Text>
                        <Heading fontSize="55px" fontWeight="bold" textAlign="left" >Take control of your career</Heading>
                        <Text textAlign="left" marginTop="10px">
                            Whether you want to transition into a new field, improve in your role or bring your big ideas to life, Pluralsight Skills can help you get there. With our technology skills platform, you can build in-demand skills and apply them in the real world with confidence. </Text>
                        <Text width="30" color="white" marginBottom="40px" marginTop="40px" bg="black" textAlign="left" >What is skills?</Text>
                    </Box>
                </Container>


                <Text marginTop="2rem" >TRUSTED BY LEARNERS AT THOUSAND OF COMPANIES</Text>
                <Grid templateColumns='repeat(5, 1fr)' width="55%" margin="auto" padding="4rem" >
                    <Image src="https://www.pluralsight.com/content/pluralsight/en/product/skills/individuals/jcr:content/main/generic_block_copy/parsys/generic_block_413530/parsys/animation_wrapper/parsys/columns_copy/column-parsys-1/generic_block_202764/parsys/columns_1110011315_c/column-parsys-1/generic_block/parsys/column_control/column-parsys-1/animation_wrapper/parsys/image_1399077451/image-res.img.c8b00ca9-350d-43b3-a8ff-aff7c88e40a8.png" alt="err" />
                    <Image src="https://www.pluralsight.com/content/pluralsight/en/product/skills/individuals/jcr:content/main/generic_block_copy/parsys/generic_block_413530/parsys/animation_wrapper/parsys/columns_copy/column-parsys-1/generic_block_202764/parsys/columns_1110011315_c/column-parsys-1/generic_block/parsys/column_control/column-parsys-2/animation_wrapper/parsys/image/image-res.img.a34c888d-9962-4238-ad26-d0f3c69618e4.png" alt="err" />
                    <Image src="https://www.pluralsight.com/content/pluralsight/en/product/skills/individuals/jcr:content/main/generic_block_copy/parsys/generic_block_413530/parsys/animation_wrapper/parsys/columns_copy/column-parsys-1/generic_block_202764/parsys/columns_1110011315_c/column-parsys-1/generic_block/parsys/column_control/column-parsys-3/animation_wrapper/parsys/image/image-res.img.f9825d73-03e8-436b-a86d-f098f2bfe3c1.png" alt="err" />
                    <Image src="https://www.pluralsight.com/content/pluralsight/en/product/skills/individuals/jcr:content/main/generic_block_copy/parsys/generic_block_413530/parsys/animation_wrapper/parsys/columns_copy/column-parsys-1/generic_block_202764/parsys/columns_1110011315_c/column-parsys-1/generic_block/parsys/column_control/column-parsys-4/animation_wrapper/parsys/image/image-res.img.2f5072d4-ac66-4988-aa9c-c18171b9623a.png" alt="err" />
                    <Image src="https://www.pluralsight.com/content/pluralsight/en/product/skills/individuals/jcr:content/main/generic_block_copy/parsys/generic_block_413530/parsys/animation_wrapper/parsys/columns_copy/column-parsys-1/generic_block_202764/parsys/columns_1110011315_c/column-parsys-1/generic_block/parsys/column_control/column-parsys-5/animation_wrapper/parsys/image/image-res.img.1724678f-85dd-4ec8-90a2-85193211978e.png" alt="err" />
                </Grid>


                <Container maxWidth="82%" display="flex" fontSize="25px" padding="6rem" bg="#222222">
                    <Box width="55%" height="400px" margin="auto">
                        <Text color="#ec008c " textAlign="left">COURSE LIBRARY</Text>
                        <Heading fontSize="45px" fontWeight="bold" textAlign="left" >
                            Learn from top technologists around the world
                        </Heading>
                        <Text textAlign="left">
                            Keep your skills up-to-date with access to thousands of courses authored by an elite network of industry experts and partners. </Text>
                        <Text width="30%" height="50px" color="white" marginBottom="40px" marginTop="40px" >Browse our libraries </Text>
                    </Box>
                    <Center >
                        <Image height="380px" width="100%" src="https://www.pluralsight.com/content/dam/pluralsight2/individual/illustration-course-library.png" alt="err" />
                    </Center>
                </Container>



                <Container maxWidth="82%" display="flex" fontSize="20px" padding="4rem" bg="#222222" >
                    <Center >
                        <Image height="380px" width="70%" src="https://www.pluralsight.com/content/dam/pluralsight2/individual/illustration-assessments.png" alt="err" />
                    </Center>
                    <Box width="55%" height="400px" margin="auto">
                        <Text color="#ec008c ">SKILL ASSESSMENTS</Text>
                        <Heading fontSize="55px" fontWeight="bold" textAlign="left" >See where your skills stand and where you can grow</Heading>
                        <Text textAlign="left" marginTop="10px">
                            The best way to start learning is to see where your skills stand first. Take a quick skill assessment to uncover your strengths and weaknesses and get personalized recommendations on what to work on.   </Text>

                    </Box>
                </Container>


                <Container maxWidth="82%" display="flex" fontSize="25px" padding="6rem" bg="#222222">
                    <Box width="55%" height="400px" margin="auto">
                        <Text color="#ec008c " textAlign="left">HANDS-ON LEARNING</Text>
                        <Heading fontSize="45px" fontWeight="bold" textAlign="left" >
                            Practice applying new skills
                        </Heading>
                        <Text textAlign="left">
                            With projects and interactive courses, you can test drive new skills in a risk-free environment and get guided feedback—so you can make mistakes before they matter.  </Text>
                        <Text width="30%" height="50px" color="white" marginBottom="40px" marginTop="40px" >Browse our libraries </Text>
                    </Box>
                    <Center >
                        <Image height="380px" width="100%" src="https://www.pluralsight.com/content/dam/pluralsight2/individual/illustration-course-library.png" alt="err" />
                    </Center>
                </Container>



            </Box>
            <Container maxWidth="60%" display="flex" fontSize="20px" padding="2rem" >
                <Box width="65%" height="400px" margin="auto">
                    <Text textAlign="left" color="#ec008c ">CUSTOMER STORIES</Text>
                    <Heading fontSize="45px" fontWeight="bold" textAlign="left" >
                        From soldier to IT specialist: Ryan's Pluralsight story
                    </Heading>
                    <Text textAlign="left"  >Technology skills change lives. Hear veteran-turned-IT professional Ryan Chasteauneuf’s Pluralsight story.  </Text>
                    <Text width="30%" color="white" marginBottom="20px" marginTop="40px" textAlign="center">Watch Rayan's Story</Text>
                </Box>
                <Center >
                    <Image height="380px" width="100%" src="https://www.pluralsight.com/content/dam/pluralsight2/individual/cs-ryan.png" alt="err" />
                </Center>
            </Container>



            <Container maxWidth="90%">
                <Text marginTop="4rem" color="#ec008c " fontWeight="Bold">PLANS and PRICING</Text>
                <Heading marginTop="1rem" fontSize="25px" >Build skills that  deliver results </Heading>

                <Box display="flex" bg="#222222" margin="auto" maxWidth="85%" justifyContent="space-evenly" marginTop="2rem" padding="3rem"  >
                    <Box width="60%" box-shadow="rgba(149, 157, 165, 0.2) 0px 8px 24px" >
                        <Heading>Standard</Heading>
                        <p>Per month</p>
                        <Text marginTop="10px" marginBottom="10px">Core course library,paths and skill assessments.</Text>
                        <Button width="50%" height="50px" border='1px solid white' color="white" marginBottom="40px" marginTop="40px" bg="black" className="custom_button">START WITH STANDARD</Button>
                        <Text>or start a <Text>FREE TRIAL</Text></Text>
                    </Box>

                    <Box width="35%" box-shadow="rgba(149, 157, 165, 0.2) 0px 8px 24px">
                        <Heading>Premium</Heading>
                        <p>Per month</p>
                        <Text marginTop="10px" marginBottom="10px" >Entire library of core and expanded courses, exams, projects and interactive courses.</Text>
                        <Button width="90%" height="50px" border='1px solid white' color="white" marginBottom="40px" marginTop="40px" bg="black" className="custom_button">START WITH PREMIUM</Button>
                        <Text>or start a <Text >FREE TRIAL</Text></Text>
                    </Box>

                </Box>
            </Container>


            <Container maxWidth="80%">

                <Heading marginTop="2rem" marginBottom="1rem" fontSize="25px" >Compare our course libraries </Heading>

                <Box display="flex" margin="auto" gap="2rem" maxWidth="85%" justifyContent="space-evenly" marginTop="1rem" padding="3rem"  >
                    <Box width="40%" box-shadow="rgba(149, 157, 165, 0.2) 0px 8px 24px" >
                        <Heading>Core library</Heading>

                        <Text marginTop="10px" marginBottom="10px">Our core library features 2,500+ of our most-popular courses on in-demand topics like cloud, data, security, software development, infrastructure and more.</Text>
                    </Box>

                    <Box width="40%" box-shadow="rgba(149, 157, 165, 0.2) 0px 8px 24px" >
                        <Heading>Expanded library</Heading>

                        <Text marginTop="10px" marginBottom="10px">Our expanded library gives you access to our full 7,000+ course library. It includes more advanced topics if you need to build deep expertise and niche topics for those tackling special projects.</Text>
                    </Box>
                </Box>
            </Container>




            <Box maxWidth="85%" display="flex" jsutifyContent="space-evenly" padding="4rem" alignItems="center" margin="auto" gap="800px">
                <Heading >SCCESS STARTS HERE</Heading>
                <Button display="block" width="20%" height="50px" border='1px solid white' color="white" marginBottom="40px" marginTop="40px" bg="black" className="custom_button" >TRY FOR FREE</Button>
            </Box>
            

        </Box>
    )


}

export default ForIndividual