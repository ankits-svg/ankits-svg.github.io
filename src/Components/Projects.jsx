import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Avatar, Box, Button, Card, Center, Container, Flex, Heading, Image, List, ListItem, SimpleGrid, Stack, StackDivider, Text, useColorModeValue, VStack } from '@chakra-ui/react';
import { ArrowForwardIcon, EmailIcon } from '@chakra-ui/icons';

function Projects() {
 

    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true
    };
    return (
    <Box >
        <Slider {...settings}>
          
            <Center py={6}>
                <Box
                  maxW={'445px'}
                  w={'full'}
                  bg={useColorModeValue('white', 'gray.900')}
                  boxShadow={'2xl'}
                  rounded={'md'}
                  p={6}
                  overflow={'hidden'}>
                  <Box
                    h={'210px'}
                    bg={'gray.100'}
                    mt={-6}
                    mx={-6}
                    mb={6}
                    pos={'relative'}>
                    <Image
                      src={
                        'https://user-images.githubusercontent.com/103572350/210390707-f5e3c6f4-6216-493e-a2d8-c3db23399b6b.png'
                      }
                      layout={'fill'}
                    />
                  </Box>
                  <Stack>
                    <Text
                      color={'green.500'}
                      textTransform={'uppercase'}
                      fontWeight={800}
                      fontSize={'sm'}
                      letterSpacing={1.1}>
                      Blog
                    </Text>
                    <Heading
                      color={useColorModeValue('gray.700', 'white')}
                      fontSize={'2xl'}
                      fontFamily={'body'}>
                      Boost your conversion rate
                    </Heading>
                    <Text color={'gray.500'}>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                      nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                      erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                      et ea rebum.
                    </Text>
                  </Stack>
                  {/* <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
                    <Avatar
                      src={'https://avatars0.githubusercontent.com/u/1164541?v=4'}
                      alt={'Author'}
                    />
                    <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                      <Text fontWeight={600}>Achim Rolle</Text>
                      <Text color={'gray.500'}>Feb 08, 2021 · 6min read</Text>
                    </Stack>
                  </Stack> */}
                  <Stack ml={"22%"} direction='row' spacing={4}>
                        <Button leftIcon={<EmailIcon />} colorScheme='teal' variant='solid'>
                          Netlify
                        </Button>
                        <Button rightIcon={<ArrowForwardIcon />} colorScheme='teal' variant='outline'>
                          Github
                        </Button>
                </Stack>
                </Box>
              </Center>
              <Center py={6}>
                <Box
                  maxW={'445px'}
                  w={'full'}
                  bg={useColorModeValue('white', 'gray.900')}
                  boxShadow={'2xl'}
                  rounded={'md'}
                  p={6}
                  overflow={'hidden'}>
                  <Box
                    h={'210px'}
                    bg={'gray.100'}
                    mt={-6}
                    mx={-6}
                    mb={6}
                    pos={'relative'}>
                    <Image
                      src={
                        'https://user-images.githubusercontent.com/103572350/210390735-3904a515-c830-494c-bf5b-ee1a15ecc0e4.png'
                      }
                      layout={'fill'}
                    />
                  </Box>
                  <Stack>
                    <Text
                      color={'green.500'}
                      textTransform={'uppercase'}
                      fontWeight={800}
                      fontSize={'sm'}
                      letterSpacing={1.1}>
                      Blog
                    </Text>
                    <Heading
                      color={useColorModeValue('gray.700', 'white')}
                      fontSize={'2xl'}
                      fontFamily={'body'}>
                      Boost your conversion rate
                    </Heading>
                    <Text color={'gray.500'}>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                      nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                      erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                      et ea rebum.
                    </Text>
                  </Stack>
                  <Stack ml={"22%"} direction='row' spacing={4}>
                        <Button leftIcon={<EmailIcon />} colorScheme='teal' variant='solid'>
                          Netlify
                        </Button>
                        <Button rightIcon={<ArrowForwardIcon />} colorScheme='teal' variant='outline'>
                          Github
                        </Button>
                </Stack>
                </Box>
              </Center>
              <Center py={6}>
                <Box
                  maxW={'445px'}
                  w={'full'}
                  bg={useColorModeValue('white', 'gray.900')}
                  boxShadow={'2xl'}
                  rounded={'md'}
                  p={6}
                  overflow={'hidden'}>
                  <Box
                    h={'210px'}
                    bg={'gray.100'}
                    mt={-6}
                    mx={-6}
                    mb={6}
                    pos={'relative'}>
                    <Image
                      src={
                        'https://user-images.githubusercontent.com/103572350/210390744-f00c1230-3b1f-4916-be53-010ff00e0091.png'
                      }
                      layout={'fill'}
                    />
                  </Box>
                  <Stack>
                    <Text
                      color={'green.500'}
                      textTransform={'uppercase'}
                      fontWeight={800}
                      fontSize={'sm'}
                      letterSpacing={1.1}>
                      Blog
                    </Text>
                    <Heading
                      color={useColorModeValue('gray.700', 'white')}
                      fontSize={'2xl'}
                      fontFamily={'body'}>
                      Boost your conversion rate
                    </Heading>
                    <Text color={'gray.500'}>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                      nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                      erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                      et ea rebum.
                    </Text>
                  </Stack>
                  <Stack ml={"22%"} direction='row' spacing={4}>
                        <Button leftIcon={<EmailIcon />} colorScheme='teal' variant='solid'>
                          Netlify
                        </Button>
                        <Button rightIcon={<ArrowForwardIcon />} colorScheme='teal' variant='outline'>
                          Github
                        </Button>
                </Stack>
                </Box>
              </Center>
              <Center py={6}>
                <Box
                  maxW={'445px'}
                  w={'full'}
                  bg={useColorModeValue('white', 'gray.900')}
                  boxShadow={'2xl'}
                  rounded={'md'}
                  p={6}
                  overflow={'hidden'}>
                  <Box
                    h={'210px'}
                    bg={'gray.100'}
                    mt={-6}
                    mx={-6}
                    mb={6}
                    pos={'relative'}>
                    <Image
                      src={
                        'https://user-images.githubusercontent.com/103572350/210390764-95e1f833-091f-48ee-b85f-9d9d06f76b0c.png'
                      }
                      layout={'fill'}
                    />
                  </Box>
                  <Stack>
                    <Text
                      color={'green.500'}
                      textTransform={'uppercase'}
                      fontWeight={800}
                      fontSize={'sm'}
                      letterSpacing={1.1}>
                      Blog
                    </Text>
                    <Heading
                      color={useColorModeValue('gray.700', 'white')}
                      fontSize={'2xl'}
                      fontFamily={'body'}>
                      Boost your conversion rate
                    </Heading>
                    <Text color={'gray.500'}>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                      nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                      erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                      et ea rebum.
                    </Text>
                  </Stack>
                  <Stack ml={"22%"} direction='row' spacing={4}>
                        <Button leftIcon={<EmailIcon />} colorScheme='teal' variant='solid'>
                          Netlify
                        </Button>
                        <Button rightIcon={<ArrowForwardIcon />} colorScheme='teal' variant='outline'>
                          Github
                        </Button>
                </Stack>
                </Box>
              </Center>
              
              <Center py={6}>
                <Box
                  maxW={'445px'}
                  w={'full'}
                  bg={useColorModeValue('white', 'gray.900')}
                  boxShadow={'2xl'}
                  rounded={'md'}
                  p={6}
                  overflow={'hidden'}>
                  <Box
                    h={'210px'}
                    bg={'gray.100'}
                    mt={-6}
                    mx={-6}
                    mb={6}
                    pos={'relative'}>
                    <Image
                      src={
                        'https://user-images.githubusercontent.com/103572350/210390779-77161dbb-e4d9-473e-b6f1-f91bd3c8ac07.png'
                      }
                      layout={'fill'}
                    />
                  </Box>
                  <Stack>
                    <Text
                      color={'green.500'}
                      textTransform={'uppercase'}
                      fontWeight={800}
                      fontSize={'sm'}
                      letterSpacing={1.1}>
                      Blog
                    </Text>
                    <Heading
                      color={useColorModeValue('gray.700', 'white')}
                      fontSize={'2xl'}
                      fontFamily={'body'}>
                      Boost your conversion rate
                    </Heading>
                    <Text color={'gray.500'}>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                      nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                      erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                      et ea rebum.
                    </Text>
                  </Stack>
                  <Stack ml={"22%"} direction='row' spacing={4}>
                        <Button leftIcon={<EmailIcon />} colorScheme='teal' variant='solid'>
                          Netlify
                        </Button>
                        <Button rightIcon={<ArrowForwardIcon />} colorScheme='teal' variant='outline'>
                          Github
                        </Button>
                </Stack>
                </Box>
              </Center>
        </Slider>
    </Box>
  )
}

export default Projects


