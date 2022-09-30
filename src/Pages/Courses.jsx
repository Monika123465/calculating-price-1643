import { Box, Container, HStack, List, ListItem, Image, Heading, Input, Button, Text, Divider, Grid, StatNumber } from "@chakra-ui/react"
import { useState } from "react";
import { AiOutlineSearch, AiOutlineFieldTime, AiFillStar, AiOutlineStar, AiOutlineLike, } from "react-icons/ai";
const courseData = [
    {
        "title": "Risk Assessment and Management",
        "url": "https://www.pluralsight.com/courses/risk-assessment-management",
        "author": "by Kevin Henry",
        "duration": "2h 32m",
        "level": "Intermediate",
        "rating": 54
    },
    {
        "title": "Understanding AWS Core Services",
        "url": "https://www.pluralsight.com/courses/understanding-aws-core-services",
        "author": "by David Tucker",
        "duration": "2h 36m",
        "level": "Beginner",
        "rating": 450
    },
    {
        "title": "Agile in the Real World",
        "url": "https://www.pluralsight.com/courses/agile-real-world",
        "author": "by Jeremy Jarrell",
        "duration": "2h 8m",
        "level": "Intermediate",
        "rating": 515
    },
    {
        "title": "Introduction to Networking for Cisco CCNA",
        "url": "https://www.pluralsight.com/courses/introduction-networking-cisco-ccna",
        "author": "by Ross Bagurdes",
        "duration": "1h 54m",
        "level": "Intermediate",
        "rating": 165
    },
    {
        "title": "Product Owner Fundamentals - Plotting the Product Owner's Career Path",
        "url": "https://www.pluralsight.com/courses/product-owner-fundamentals-product-owners-career-path",
        "author": "by Jeremy Jarrell",
        "duration": "1h 11m",
        "level": "Intermediate",
        "rating": 75
    },
    {
        "title": "Managing the Kubernetes API Server and Pods",
        "url": "https://www.pluralsight.com/courses/managing-kubernetes-api-server-pods",
        "author": "by Anthony Nocentino",
        "duration": "3h 43m",
        "level": "Intermediate",
        "rating": 145
    },
    {
        "title": "Understanding IT Governance Drivers and Principles",
        "url": "https://www.pluralsight.com/courses/cobit-understanding-it-governance-drivers-principles",
        "author": "by Frederico Aranha",
        "duration": "1h 41m",
        "level": "Beginner",
        "rating": 25
    },
    {
        "title": "Leveraging the Power of the Android Platform",
        "url": "https://www.pluralsight.com/courses/android-leveraging-power-platform",
        "author": "by Jim Wilson",
        "duration": "3h 2m",
        "level": "Advanced",
        "rating": 50
    },
    {
        "title": "Understanding Android Application Basics",
        "url": "https://www.pluralsight.com/courses/android-application-basics-understanding",
        "author": "by Jim Wilson",
        "duration": "4h 15m",
        "level": "Beginner",
        "rating": 500
    },
    {
        "title": "Computer Fundamentals: Virtualization and Cloud Computing",
        "url": "https://www.pluralsight.com/courses/computer-fundamentals-virtualization-cloud-computing",
        "author": "by Vlad Catrinescu",
        "duration": "1h 27m",
        "level": "Beginner",
        "rating": 52
    },
    {
        "title": "Delivering Value Quickly with ICAgile",
        "url": "https://www.pluralsight.com/courses/delivering-value-quickly-icagile",
        "author": "by Casey Ayers",
        "duration": "2h 36m",
        "level": "Intermediate",
        "rating": 57
    },
    {
        "title": "Software Defined Networking (SDN): The Big Picture",
        "url": "https://www.pluralsight.com/courses/sdn-big-picture",
        "author": "by Brian Eiler",
        "duration": "2h 32m",
        "level": "Intermediate",
        "rating": 185
    },
    {
        "title": "Design a Database Environment with SQL Server 2014 (70-465)",
        "url": "https://www.pluralsight.com/courses/design-database-environment-sql-server-2014-70-465",
        "author": "by Pluralsight",
        "duration": "1h 13m",
        "level": "Intermediate",
        "rating": 25
    },
    {
        "title": "Maintaining, Monitoring and Troubleshooting Kubernetes",
        "url": "https://www.pluralsight.com/courses/maintaining-monitoring-troubleshooting-kubernetes",
        "author": "by Anthony Nocentino",
        "duration": "2h 14m",
        "level": "Intermediate",
        "rating": 54
    },
    {
        "title": "Best Practices for Project Estimation",
        "url": "https://www.pluralsight.com/courses/project-estimation-best-practices",
        "author": "by Michael Krasowski",
        "duration": "2h 46m",
        "level": "Intermediate",
        "rating": 245
    },
    {
        "title": "Designing/Deploying Exchange 2016: Mailbox Databases",
        "url": "https://www.pluralsight.com/courses/designing-deploying-exchange-2016-70-345-mailbox-databases",
        "author": "by Paul Cunningham",
        "duration": "3h 55m",
        "level": "Intermediate",
        "rating": 52
    },
    {
        "title": "Working on a Team",
        "url": "https://www.pluralsight.com/courses/working-on-a-team",
        "author": "by Jason Alba",
        "duration": "1h 43m",
        "level": "Beginner",
        "rating": 257
    },
    {
        "title": "Linux High Availability Cluster Management",
        "url": "https://www.pluralsight.com/courses/linux-high-availability-cluster-management-lpic-3",
        "author": "by David Clinton",
        "duration": "1h 26m",
        "level": "Intermediate",
        "rating": 25
    },
    {
        "title": "Analyzing Data on AWS",
        "url": "https://www.pluralsight.com/courses/analyzing-data-aws",
        "author": "by Clarke Bishop",
        "duration": "2h 12m",
        "level": "Intermediate",
        "rating": 27
    },
    {
        "title": "Building and Managing Your Career Plan",
        "url": "https://www.pluralsight.com/courses/career-plan-building-managing",
        "author": "by Jason Alba",
        "duration": "2h 10m",
        "level": "Beginner",
        "rating": 127
    },
    {
        "title": "Handling Exceptions in Java 11",
        "url": "https://www.pluralsight.com/courses/handling-exceptions-java",
        "author": "by Jim Wilson",
        "duration": "1h 46m",
        "level": "Beginner",
        "rating": 86
    },
    {
        "title": "Android Services Fundamentals",
        "url": "https://www.pluralsight.com/courses/android-fundamentals-services",
        "author": "by Sriyank Siddhartha",
        "duration": "3h 13m",
        "level": "Beginner",
        "rating": 62
    },
    {
        "title": "Cisco CyberOps: Exploring Security Concepts",
        "url": "https://www.pluralsight.com/courses/cisco-cyberops-exploring-security-concepts",
        "author": "by Joe Abraham",
        "duration": "1h 37m",
        "level": "Intermediate",
        "rating": 19
    },
    {
        "title": "Computer Fundamentals: Security",
        "url": "https://www.pluralsight.com/courses/computer-fundamentals-security",
        "author": "by Glenn Weadock",
        "duration": "2h 39m",
        "level": "Beginner",
        "rating": 43
    },
    {
        "title": "Exam Alert: Deploy and Manage Azure Compute Resources",
        "url": "https://www.pluralsight.com/courses/exam-alert-deploy-manage-az-compute-resources",
        "author": "by Michael Teske",
        "duration": "22m",
        "level": "Beginner",
        "rating": 20
    },
    {
        "title": "CentOS Enterprise Linux 7 Network Management",
        "url": "https://www.pluralsight.com/courses/lfcs-linux-networking",
        "author": "by Andrew Mallett",
        "duration": "4h 7m",
        "level": "Beginner",
        "rating": 72
    },
    {
        "title": "Outlook 2019 Essentials",
        "url": "https://www.pluralsight.com/courses/outlook-2019-essentials",
        "author": "by Heather Ackmann",
        "duration": "1h 52m",
        "level": "Beginner",
        "rating": 40
    },
    {
        "title": "Outlook 2019 Power Users",
        "url": "https://www.pluralsight.com/courses/outlook-2019-power-users",
        "author": "by Heather Ackmann",
        "duration": "1h 13m",
        "level": "Intermediate",
        "rating": 12
    },
    {
        "title": "Adding Graphics to Web Pages Using Canvas and SVG",
        "url": "https://www.pluralsight.com/courses/adding-graphics-web-pages-using-canvas-svg",
        "author": "by Mike Van Sickle",
        "duration": "1h 42m",
        "level": "Beginner",
        "rating": 46
    },
    {
        "title": "Building Bots with Microsoft’s Bot Framework 4: Getting Started",
        "url": "https://www.pluralsight.com/courses/microsoft-bot-framework-building-bots-getting-started-2019",
        "author": "by Matthew Kruczek",
        "duration": "4h 21m",
        "level": "Intermediate",
        "rating": 77
    },
    {
        "title": "Building a Cybersecurity Home Lab Environment",
        "url": "https://www.pluralsight.com/courses/building-cybersecurity-home-lab-environment",
        "author": "by Dale Meredith",
        "duration": "2h 1m",
        "level": "Intermediate",
        "rating": 42
    },
    {
        "title": "Firebase Fundamentals",
        "url": "https://www.pluralsight.com/courses/firebase-fundamentals",
        "author": "by Joe Eames",
        "duration": "3h 44m",
        "level": "Intermediate",
        "rating": 100
    },
    {
        "title": "Enterprise Business Intelligence with Tableau Server",
        "url": "https://www.pluralsight.com/courses/enterprise-business-intelligence-tableau-server",
        "author": "by Ben Sullins",
        "duration": "1h 36m",
        "level": "Intermediate",
        "rating": 137
    },
    {
        "title": "Working with Files in C",
        "url": "https://www.pluralsight.com/courses/working-files-c",
        "author": "by Alexandru Dima",
        "duration": "1h 3m",
        "level": "Advanced",
        "rating": 21
    },
    {
        "title": "Modern Software Architecture: Domain Models, CQRS, and Event Sourcing",
        "url": "https://www.pluralsight.com/courses/modern-software-architecture-domain-models-cqrs-event-sourcing",
        "author": "by Dino Esposito",
        "duration": "4h 25m",
        "level": "Intermediate",
        "rating": 998
    },
    {
        "title": "Advanced Generators and Coroutines in Python 3",
        "url": "https://www.pluralsight.com/courses/advanced-generators-and-coroutines",
        "author": "by Axel Sirota",
        "duration": "1h 49m",
        "level": "Advanced",
        "rating": 63
    }
]

function Courses() {

    const [search, setSearch] = useState('')

    return (
        <Box bg="black" color="white" maxWidth="100%" >

            <Container sx={{ backgroundImage: '/courses.png' }} maxWidth="68%" paddingTop="2rem"  >
                <Image margin="auto" src="https://www.pluralsight.com/content/dam/pluralsight2/product/v2/logos/logo-skills.png" alt="err" />
                <Heading>Thousands of courses authored by our <br></br> network of industry experts</Heading>
            </Container>

            <Container maxWidth="68%">
                <Heading className="custom_text" marginTop="30px">Search</Heading>
                <Box display="flex" gap="40px"   >
                    <Input height="50px" type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="search" />
                    <Button height="50px" width="10%" border="1px solid white" color="white" bg="black">Sort by</Button></Box>
            </Container>
            <Box maxWidth="65%" marginTop="20px" display="flex" margin="auto" gap="60px">

                <Box marginTop="20px" >
                    <Heading fontSize="30px" marginTop="10px">Ways to learn</Heading><Divider />
                    <Text className="custom_text">All</Text>
                    <Text className="custom_text">Core courses</Text>
                    <Text className="custom_text">Expanded courses</Text>
                    <Text className="custom_text">Labs</Text>

                    <Heading fontSize="30px" marginTop="10px" className="custom_text">Skill level</Heading><Divider />
                    <Text className="custom_text">Advanced</Text>
                    <Text className="custom_text">Beginer</Text>
                    <Text className="custom_text">Intermediate</Text>


                    <Heading fontSize="30px" marginTop="10px" className="custom_text">Subject</Heading><Divider />
                    <Text className="custom_text">Architecture & construction</Text>
                    <Text className="custom_text">Business professional</Text>
                    <Text className="custom_text">Creative professional</Text>
                    <Text className="custom_text">Data professional</Text>
                    <Text className="custom_text">IT ops</Text>
                    <Text className="custom_text">Manufacturing & design</Text>
                    <Text className="custom_text">Information & cyber security</Text>
                    <Text className="custom_text">Software development</Text>
                    <Text className="custom_text">Web development</Text>

                </Box>

                <List marginTop="20px" >
                
                    {
                        courseData
                            .filter(el => (el.title.toLowerCase()
                                .includes(search.toLowerCase())
                                || el.author.toLowerCase().includes(search.toLowerCase())))
                            .sort((a, b) => (a.rating - b.rating))
                            .map((el) => (
                                <ListItem >
                                    <Heading width="68%"
                                        paddingY={3}
                                        margin="auto"
                                        className="custom_text"
                                        fontSize="28px"
                                        marginTop="30px">
                                        {el.title}</Heading>
                                    <Box paddingBottom={2} width="68%" margin="auto" display="flex" gap="30px"><Text>{el.author}</Text>
                                        <HStack>
                                            <Text>{el.duration}</Text>
                                            <AiOutlineFieldTime color="white" fontSize={"1.2em"} />
                                        </HStack>
                                        <Box display="flex">
                                            <Text>{el.level}</Text>
                                            <Image
                                                alt="err"
                                                width="30px"
                                                margin="auto"
                                                marginLeft="0.1rem"
                                                src="https://www.pngmart.com/files/7/Graph-PNG-Transparent-Image.png"
                                            />
                                        </Box>
                                        <HStack>
                                            <Text>{el.rating}</Text>
                                            <HStack>
                                                {
                                                    Array(Math.floor(Math.random() * 5 + 1)).fill(0).map((el => (
                                                        <AiFillStar color="yellow" />
                                                    )))
                                                }
                                            </HStack>
                                        </HStack>
                                    </Box>
                                    <Divider width="68%" margin="auto" />
                                </ListItem>

                            ))
                    }
                </List>

            </Box>

            <Box width="68%" marginTop="2rem" margin="auto" padding="3rem" paddingBottom="8rem">
                <Heading className="custom_text">Browse by Link</Heading>
                <Grid templateColumns="repeat(3,1fr)">
                    <Box>
                        <Text className="custom_text">Software Development</Text>
                        <Text className="custom_text" >Web Development</Text>
                        <Text className="custom_text">Mobile Development</Text>
                        <Text className="custom_text">JavaScript</Text>
                        <Text className="custom_text">C#</Text>
                        <Text className="custom_text">Python</Text>
                        <Text className="custom_text">Node.js</Text>
                        <Text className="custom_text">View more </Text>
                        <Text className="custom_text">Data Professional</Text>
                        <Text className="custom_text">Architecture and Construction</Text>

                    </Box>

                    <Box>
                        <Text className="custom_text">IT Ops</Text>
                        <Text className="custom_text">IT Certifications</Text>
                        <Text className="custom_text">Security</Text>
                        <Text className="custom_text">Database Administration</Text>
                        <Text className="custom_text">Virtualization</Text>
                        <Text className="custom_text">IT Networking</Text>
                        <Text className="custom_text">Servers</Text>
                        <Text className="custom_text">View more </Text>
                        <Text className="custom_text">Business Professional</Text>
                        <Text className="custom_text">Manufacturing and Design</Text>

                    </Box>

                    <Box>
                        <Text className="custom_text">Information  Cyber Security</Text>
                        <Text className="custom_text">Security Certifications</Text>
                        <Text className="custom_text">Security Fundamentals</Text>
                        <Text className="custom_text">Security Auditing</Text>
                        <Text className="custom_text">Penetration Testing</Text>
                        <Text className="custom_text">Digital Forensics</Text>
                        <Text className="custom_text">Malware Analysis</Text>
                        <Text className="custom_text">View more </Text>
                    </Box>


                </Grid>

            </Box>



        </Box>
    )


}

export default Courses

