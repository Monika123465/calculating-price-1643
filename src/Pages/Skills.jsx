import { Box, Container, Heading, Button, Image, Text, Center, Grid, Divider, } from "@chakra-ui/react"

function Skills() {
    return (
        <Box bg="black" color="white">

            <Container maxWidth="88%" display="flex" fontSize="20px" padding="6rem" >
                <Box width="55%" height="400px" margin="auto" >

                    <Heading fontSize="45px" fontWeight="bold" textAlign="left" >
                        Where technology teams
                        build better skills, faster
                    </Heading>
                    <Text textAlign="left">Technology teams are only as successful as their skills are relevant. With access to expert-authored courses and content,
                        skill assessments and analytics, Pluralsight Skills
                        gives you the most effective path to building business-critical skills. </Text>
                    <Button display="block" width="30%" height="50px" border='1px solid white' color="white" marginBottom="40px" marginTop="40px" className="custom_button">TRY FOR FREE</Button>
                </Box>
                <Center >
                    <Image width="100%" src="https://www.pluralsight.com/content/pluralsight/en/product/skills/jcr:content/main/generic_block1_copy_/image-res.img.76b3d816-71a6-42a0-bda5-b56969081f12.png" alt="err" />
                </Center>
            </Container>


            <Container maxWidth="50%">
                <Grid templateColumns='repeat(4, 1fr)'>
                    <Text>COURSE LIBRARY </Text>
                    <Text>SKILLS FEATURES</Text>
                    <Text>ROI</Text>
                    <Text>PRICING</Text>
                </Grid>
            </Container>


            <Box maxWidth="100%" margin="20px"  >

                <Container maxWidth="82%" display="flex" fontSize="20px" padding="4rem" bg="#222222" >
                    <Center >
                        <Image height="380px" width="70%" src="https://www.pluralsight.com/content/pluralsight/en/product/skills/jcr:content/main/generic_block_copy/parsys/generic_block_413530/parsys/animation_wrapper/parsys/columns_copy/column-parsys-1/generic_block_202764/parsys/columns_copy/column-parsys-1/generic_block_copy_c/parsys/image/image-res.img.344032d8-90ae-46d8-875d-ca8374e4c28b.png" alt="err" />
                    </Center>
                    <Box width="55%" height="400px" margin="auto">
                        <Text color="#ec008c ">COURSE LIBRARY</Text>
                        <Heading fontSize="55px" fontWeight="bold" textAlign="left" >Feel confident your team is learning from the industry’s best</Heading>
                        <Text textAlign="left" marginTop="10px">
                            Upskill your team with courses on the most in-demand technology topics, taught by the experts who know them best.
                        </Text>
                        <Text width="30" color="white" marginTop="10px" textAlign="left" >Software Development</Text><Divider />
                        <Text width="30" color="white" marginTop="10px" textAlign="left" >Information and Cybersecurity</Text><Divider />
                    </Box>
                </Container>

                <Container maxWidth="82%" bg="#222222" textAlign="left">
                    <Box margin="auto" width="70%"><Heading m fontSize="25px" >Compare our course libraries </Heading></Box>
                    <Box display="flex" margin="auto" gap="2rem" maxWidth="85%" justifyContent="space-evenly" padding="2rem"  >
                        <Box width="40%" box-shadow="rgba(149, 157, 165, 0.2) 0px 8px 24px" >
                            <Heading>Core library</Heading>
                            <Text marginTop="10px" marginBottom="10px">Our core library features 2,500+ of our most-popular courses on in-demand topics like cloud, data, security, software development, infrastructure and more.</Text>
                            <Text>*Available in our starter plan</Text>
                        </Box>

                        <Box width="40%" box-shadow="rgba(149, 157, 165, 0.2) 0px 8px 24px" >
                            <Heading>Expanded library</Heading>
                            <Text marginTop="10px" marginBottom="10px">Our expanded library gives you access to our full 7,000+ course library. It includes more advanced topics if you need to build deep expertise and niche topics for those tackling special projects.</Text>
                            <Text>*Available in our professional and enterprise plans</Text>
                        </Box>
                    </Box>
                </Container>

                <Box maxWidth="82%" bg="#222222" margin="auto">
                    <Box padding="2rem" display="flex" justifyContent="space-between" alignItems="center" width="90%" height="80px" border='1px solid white' color="white" marginTop="40px" margin="auto" gap="0.2rem" className="custom_button" >
                        <Text>Explore our expansive library of expert-authored courses </Text>
                        <Text>BROWSE OUR COURSE LIBRARIES</Text>
                    </Box>
                </Box>


                <Box maxWidth="82%" bg="#222222" margin="auto" padding="80px">

                    <Box width="58%" margin="auto" >
                        <Text color="#ec008c" marginBottom="20px">FEATURES OF SKILLS</Text>
                        <Heading marginBottom="20px">Tools to help your team grow</Heading>
                        <Text fontSize="20px">Give your team a trusted skill development solution that allows them to build
                            in-demand skills in a way that’s personalized to their current knowledge and preferred way to learn.
                        </Text>
                    </Box>

                    <Grid templateColumns="repeat(3,1fr)" margin="auto" gap="2rem" maxWidth="100%" marginTop="1rem" padding="6rem" >
                        <Box width="90%" box-shadow="rgba(149, 157, 165, 0.2) 0px 8px 24px" bg="#2f2f2f" padding="20px" borderRadius="20px" color="white" >
                            <Text marginTop="2rem" marginBottom="1rem" fontSize="25px" >HANDS ON LEARNING</Text>
                            <Text >Upskill with interactive courses,projects,labs,and
                                practice what you've learned with sandboxes.
                            </Text>
                            <Text marginTop="15px"   >Learn more</Text>
                        </Box>

                        <Box width="90%" box-shadow="rgba(149, 157, 165, 0.2) 0px 8px 24px" bg="#2f2f2f" padding="20px" borderRadius="20px" color="white" >
                            <Text marginTop="2rem" marginBottom="1rem" fontSize="25px" >CERITFICATION CONTENT</Text>
                            <Text >Upskill with interactive courses,projects,labs,and
                                practice what you've learned with sandboxes.
                            </Text>
                            <Text marginTop="15px" >Learn more</Text>
                        </Box>

                        <Box width="90%" box-shadow="rgba(149, 157, 165, 0.2) 0px 8px 24px" bg="#2f2f2f" padding="20px" borderRadius="20px" color="white" >
                            <Text marginTop="2rem" marginBottom="1rem" fontSize="25px" >INSTRUCTION TRAINING </Text>
                            <Text >Upskill with interactive courses,projects,labs,and
                                practice what you've learned with sandboxes.
                            </Text>
                            <Text marginTop="15px"  >Learn more</Text>
                        </Box>

                        <Box width="90%" box-shadow="rgba(149, 157, 165, 0.2) 0px 8px 24px" bg="#2f2f2f" padding="20px" borderRadius="20px" color="white" >
                            <Text marginTop="2rem" marginBottom="1rem" fontSize="25px" >SKILL ASSESSMENT</Text>
                            <Text >Upskill with interactive courses,projects,labs,and
                                practice what you've learned with sandboxes.
                            </Text>
                            <Text marginTop="15px"  >Learn more</Text>
                        </Box>

                        <Box width="90%" box-shadow="rgba(149, 157, 165, 0.2) 0px 8px 24px" bg="#2f2f2f" padding="20px" borderRadius="20px" color="white" >
                            <Text marginTop="2rem" marginBottom="1rem" fontSize="25px" >ANALYTICS</Text>
                            <Text >Upskill with interactive courses,projects,labs,and
                                practice what you've learned with sandboxes.
                            </Text>
                            <Text marginTop="15px"   >Learn more</Text>
                        </Box>

                        <Box width="90%" box-shadow="rgba(149, 157, 165, 0.2) 0px 8px 24px" bg="#2f2f2f" padding="20px" borderRadius="20px" color="white" >
                            <Text marginTop="2rem" marginBottom="1rem" fontSize="25px" >PATHS</Text>
                            <Text >Upskill with interactive courses,projects,labs,and
                                practice what you've learned with sandboxes.
                            </Text>
                            <Text marginTop="15px" >Learn more</Text>
                        </Box>
                    </Grid>
                    <Text marginTop="2rem" >HELPING THOUSANDS OF ORGANIZATIONS BUILD TECH SKILLS AT SCALE</Text>
                    <Grid templateColumns='repeat(5, 1fr)' width="80%" margin="auto" padding="4rem" >
                        <Image src="https://www.pluralsight.com/content/pluralsight/en/product/skills/individuals/jcr:content/main/generic_block_copy/parsys/generic_block_413530/parsys/animation_wrapper/parsys/columns_copy/column-parsys-1/generic_block_202764/parsys/columns_1110011315_c/column-parsys-1/generic_block/parsys/column_control/column-parsys-1/animation_wrapper/parsys/image_1399077451/image-res.img.c8b00ca9-350d-43b3-a8ff-aff7c88e40a8.png" alt="err" />
                        <Image src="https://www.pluralsight.com/content/pluralsight/en/product/skills/individuals/jcr:content/main/generic_block_copy/parsys/generic_block_413530/parsys/animation_wrapper/parsys/columns_copy/column-parsys-1/generic_block_202764/parsys/columns_1110011315_c/column-parsys-1/generic_block/parsys/column_control/column-parsys-2/animation_wrapper/parsys/image/image-res.img.a34c888d-9962-4238-ad26-d0f3c69618e4.png" alt="err" />
                        <Image src="https://www.pluralsight.com/content/pluralsight/en/product/skills/individuals/jcr:content/main/generic_block_copy/parsys/generic_block_413530/parsys/animation_wrapper/parsys/columns_copy/column-parsys-1/generic_block_202764/parsys/columns_1110011315_c/column-parsys-1/generic_block/parsys/column_control/column-parsys-3/animation_wrapper/parsys/image/image-res.img.f9825d73-03e8-436b-a86d-f098f2bfe3c1.png" alt="err" />
                        <Image src="https://www.pluralsight.com/content/pluralsight/en/product/skills/individuals/jcr:content/main/generic_block_copy/parsys/generic_block_413530/parsys/animation_wrapper/parsys/columns_copy/column-parsys-1/generic_block_202764/parsys/columns_1110011315_c/column-parsys-1/generic_block/parsys/column_control/column-parsys-4/animation_wrapper/parsys/image/image-res.img.2f5072d4-ac66-4988-aa9c-c18171b9623a.png" alt="err" />
                        <Image src="https://www.pluralsight.com/content/pluralsight/en/product/skills/individuals/jcr:content/main/generic_block_copy/parsys/generic_block_413530/parsys/animation_wrapper/parsys/columns_copy/column-parsys-1/generic_block_202764/parsys/columns_1110011315_c/column-parsys-1/generic_block/parsys/column_control/column-parsys-5/animation_wrapper/parsys/image/image-res.img.1724678f-85dd-4ec8-90a2-85193211978e.png" alt="err" />
                    </Grid>
                </Box>
            </Box>


            <Box maxWidth="100%" className="custom_div" color="black" padding="6rem">
                <Box width="58%" margin="auto" >

                    <Heading marginBottom="20px" color="white">See an immediate ROI</Heading>
                    <Text fontSize="20px">Help everyone in your organization reach their full potential. By prioritizing technology skill development,
                        your technologists will grow in their careers and your business will achieve better outcomes.

                    </Text>
                </Box>

                <Grid templateColumns="repeat(3,1fr)" margin="auto" gap="2rem" maxWidth="80%" marginTop="1rem" padding="6rem" color="black"  >
                    <Box width="90%" padding="20px" borderRadius="20px"  >
                        <Image width="80%" src="https://www.pluralsight.com/content/pluralsight/en/product/skills/jcr:content/main/animation_wrapper_co/parsys/generic_block_378108/parsys/generic_block_134198/parsys/animation_wrapper/parsys/columns/column-parsys-1/generic_block/parsys/column_control/column-parsys-1/image/image-res.img.feaf3de6-cec3-45a9-95d4-ac503c0a7c66.png" alt="" />
                        <Text marginTop="2rem" marginBottom="1rem" fontSize="20px" >
                            93% of surveyed organizations realized a return on their investment within 6-12
                            months of implementing Pluralsight</Text>
                    </Box>
                    <Box width="90%" padding="20px" borderRadius="20px"  >
                        <Image width="80%" src="https://www.pluralsight.com/content/pluralsight/en/product/skills/jcr:content/main/animation_wrapper_co/parsys/generic_block_378108/parsys/generic_block_134198/parsys/animation_wrapper/parsys/columns/column-parsys-1/generic_block/parsys/column_control/column-parsys-2/image/image-res.img.311b99ae-5a45-4659-9c96-e9de2bd7aec7.png" alt="" />
                        <Text marginTop="2rem" marginBottom="1rem" fontSize="20px" >96% of surveyed organizations are likely to recommend Pluralsight</Text>

                    </Box>
                    <Box width="100%" padding="20px" borderRadius="20px"  >
                        <Image width="70%" src="https://www.pluralsight.com/content/pluralsight/en/product/skills/jcr:content/main/animation_wrapper_co/parsys/generic_block_378108/parsys/generic_block_134198/parsys/animation_wrapper/parsys/columns/column-parsys-1/generic_block/parsys/column_control/column-parsys-3/image/image-res.img.ab2edd67-877a-4794-b56f-3a166f810e5b.png" alt="" />
                        <Text marginTop="2rem" marginBottom="1rem" fontSize="20px" >Over half of surveyed organizations confirmed that Pluralsight has enabled them to save time and money</Text>

                    </Box>
                    <Box width="100%" padding="20px" borderRadius="10px"  >
                        <Image width="50%" src="https://www.pluralsight.com/content/pluralsight/en/product/skills/jcr:content/main/animation_wrapper_co/parsys/generic_block_378108/parsys/generic_block_134198/parsys/animation_wrapper/parsys/columns/column-parsys-1/generic_block/parsys/column_control_copy/column-parsys-1/image/image-res.img.4f234eb3-dd4c-40b6-9e83-4096c5b38d4b.png" alt="" />
                        <Text marginTop="2rem" marginBottom="1rem" fontSize="20px" >
                            Providing skill development resources to your employees increases retention and keeps employees engaged</Text>
                              </Box>
                    <Box width="90%" padding="20px" borderRadius="20px"  >
                        <Image width="70%" src="https://www.pluralsight.com/content/pluralsight/en/product/skills/jcr:content/main/animation_wrapper_co/parsys/generic_block_378108/parsys/generic_block_134198/parsys/animation_wrapper/parsys/columns/column-parsys-1/generic_block/parsys/column_control_copy/column-parsys-2/image/image-res.img.5667d462-0234-4806-a9dd-7d14f015f4cf.png" alt="" />
                        <Text marginTop="2rem" marginBottom="1rem" fontSize="20px" >Tools like Pluralsight enable objective career development 
                        discussions and guide employees into future roles</Text>
                        </Box>
                    <Box width="100%" padding="20px" borderRadius="10px"  >
                        <Image width="50%" src="https://www.pluralsight.com/content/pluralsight/en/product/skills/jcr:content/main/animation_wrapper_co/parsys/generic_block_378108/parsys/generic_block_134198/parsys/animation_wrapper/parsys/columns/column-parsys-1/generic_block/parsys/column_control_copy/column-parsys-3/image/image-res.img.0fb7a212-204c-4e4d-9560-cbf6e4d7b65c.png" alt="" />
                        <Text marginTop="2rem" marginBottom="1rem" fontSize="20px" >A culture of learning encourages employees to grow and learn from one another,
                         making the whole business better</Text>
                        </Box>
                </Grid>
            </Box>



        </Box>
    )


}

export default Skills