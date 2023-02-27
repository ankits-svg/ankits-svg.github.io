// import React from 'react'

// function AboutMe() {
//   return (
//     <div>AboutMe</div>
//   )
// }

// export default AboutMe
import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    Icon,
    useColorModeValue,
  } from '@chakra-ui/react';
  import {
    IoAnalyticsSharp,
    IoBookSharp,
    IoLogoBitcoin,
    IoSearchSharp,
  } from 'react-icons/io5';
  import { ReactElement } from 'react';
import { FaChessBoard } from 'react-icons/fa';
  
  interface FeatureProps {
    text: string;
    iconBg: string;
    icon?: ReactElement;
  }
  
  const Feature = ({ text, icon, iconBg }: FeatureProps) => {
    return (
      <Stack direction={'row'} align={'center'}>
        <Flex
          w={8}
          h={8}
          align={'center'}
          justify={'center'}
          rounded={'full'}
          bg={iconBg}>
          {icon}
        </Flex>
        <Text fontWeight={600}>{text}</Text>
      </Stack>
    );
  };
  
  export default function AboutMe() {
    return (
      <Container maxW={'5xl'} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            <Text
              marginLeft={"37%"}
              textTransform={'uppercase'}
              color={'#101920'}
              fontWeight={600}
              fontSize={'sm'}
              bg={useColorModeValue('#FFE715', 'blue.900')}
              p={2}
              textAlign={"center"}
              alignSelf={'flex-start'}
              rounded={'md'}>
              About Me
            </Text>
            <Heading color={"#FFE715"}>Full Stack Web Developer</Heading>
            <Text fontStyle={"normal"} color={'#3D7396'} fontSize={'lg'}>
            Hi, My name is Ankit Sharma. I have completed my B.Tech from Pranveer Singh Institute Of Technology, Kanpur(U.P).
            </Text>
            <Text fontStyle={"normal"} color={'#3D7396'} fontSize={'lg'}>
              Currently, I have expertise in HTML, CSS, Bootstrap, JavaScript, Reactjs, React-Redux, Typescript and Cypress. Apart from programming, I enjoy.....</Text>
            <Stack
              color={"#FFE715"}
              spacing={4}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('#101920', 'gray.700')}
                />
              }>
              <Feature
                icon={
                  <IoBookSharp/>
                }
                iconBg={useColorModeValue('#101920', 'yellow.900')}
                
                text={'Reading books'}
                
              />
              <Feature
                icon={<FaChessBoard/>}
                iconBg={useColorModeValue('#101920', 'green.900')}
                text={'Playing Chess'}
              />
              <Feature
                icon={
                  <Icon as={IoSearchSharp} color={'purple.500'} w={5} h={5} />
                }
                iconBg={useColorModeValue('#101920', 'purple.900')}
                text={'Reading Astrology'}
              />
            </Stack>
          </Stack>
          <Flex>
          <Image
              mt={"80px"}
              ml={"40px"}
              alt={'Hero Image'}
              fit={'cover'}
              align={'center'}
              w={'60%'}
              h={'60%'}
              borderRadius='50%'
              _hover={{border:"2px solid #FFE715"}}
              src={
                'https://user-images.githubusercontent.com/103572350/221667719-a3e90e60-8e13-4f93-9663-aaf4b4f2ca0a.jpg'
              }
            />
          </Flex>
        </SimpleGrid>
      </Container>
    );
  }