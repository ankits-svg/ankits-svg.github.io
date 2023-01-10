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
              textTransform={'uppercase'}
              color={'blue.400'}
              fontWeight={600}
              fontSize={'sm'}
              bg={useColorModeValue('blue.50', 'blue.900')}
              p={2}
              alignSelf={'flex-start'}
              rounded={'md'}>
              About Me
            </Text>
            <Heading>Full Stack Web Developer</Heading>
            <Text color={'red.500'} fontSize={'lg'}>
            Hi, My name is Ankit Sharma. I have completed my B.Tech from Pranveer Singh Institute Of Technology, Kanpur(U.P).
            </Text>
            <Text color={'red.500'} fontSize={'lg'}>
              Currently, I have expertise in HTML, CSS, Bootstrap, JavaScript, Reactjs, React-Redux, Typescript and Cypress. Apart from programming, I enjoy.....</Text>
            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.100', 'gray.700')}
                />
              }>
              <Feature
                icon={
                  <IoBookSharp/>
                }
                iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                text={'Reading books'}
              />
              <Feature
                icon={<FaChessBoard/>}
                iconBg={useColorModeValue('green.100', 'green.900')}
                text={'Playing Chess'}
              />
              <Feature
                icon={
                  <Icon as={IoSearchSharp} color={'purple.500'} w={5} h={5} />
                }
                iconBg={useColorModeValue('purple.100', 'purple.900')}
                text={'Reading Astrology'}
              />
            </Stack>
          </Stack>
          <Flex>
            <Image
              rounded={'md'}
              alt={'feature image'}
              src={
                'https://i.pinimg.com/originals/81/17/8b/81178b47a8598f0c81c4799f2cdd4057.gif'
              }
              objectFit={'cover'}
            />
          </Flex>
        </SimpleGrid>
      </Container>
    );
  }