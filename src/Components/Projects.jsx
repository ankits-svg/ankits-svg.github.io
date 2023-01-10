import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Avatar, Box, Button, Card, Center, Container, Flex, Heading, Image, Link, List, ListItem, SimpleGrid, Stack, StackDivider, Text, useColorModeValue, VStack } from '@chakra-ui/react';
import { ArrowForwardIcon, EmailIcon } from '@chakra-ui/icons';
import { FaVideo } from 'react-icons/fa';

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
      <Heading size='lg' fontSize='50px' color="#F56565">
        Projects
    </Heading>
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
                    h={'220px'}
                    bg={'gray.100'}
                    mt={-6}
                    mx={-6}
                    mb={6}
                    pos={'relative'}>
                    <Image
                      
                      src={
                        'https://user-images.githubusercontent.com/103572350/211359968-cb35eda4-80c2-48c9-9340-420d512640ce.png'
                      }
                      layout={'full'}
                    />
                  </Box>
                  <Stack>
                    <Text
                      color={'green.500'}
                      textTransform={'uppercase'}
                      fontWeight={800}
                      fontSize={'md'}
                      letterSpacing={1.1}>
                      1
                    </Text>
                    <Heading
                      color={useColorModeValue('gray.700', 'white')}
                      fontSize={'2xl'}
                      fontFamily={'body'}>
                      Friend's Fashion Adda
                    </Heading>
                    <Text color={'gray.500'}>
                    Friend's Fashion Adda is the fashion e-commerce startup that stands out from the rest. It offers a trendy collection of apparel based on dazzling and upbeat designs that resonate with the millennials.
                    </Text>
                    <br />
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
                        
                        <a href="https://friendsfashionadda.netlify.app/" target="_blank">
                        <Button  colorScheme='teal' variant='solid'>
                          Netlify
                        </Button>
                        </a>
                        <a href="https://github.com/ankits-svg/-celestial-pie-5247" target="_blank">
                        <Button rightIcon={<ArrowForwardIcon />} colorScheme='teal' variant='outline'>
                          Github
                        </Button>
                        </a>
                        
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
                        'https://user-images.githubusercontent.com/103572350/211360019-4113e21d-050d-4176-b054-9574dd7e8a8e.png'
                      }
                      layout={'full'}
                    />
                  </Box>
                  <Stack>
                    <Text
                      color={'green.500'}
                      textTransform={'uppercase'}
                      fontWeight={800}
                      fontSize={'md'}
                      letterSpacing={1.1}>
                      2
                    </Text>
                    <Heading
                      color={useColorModeValue('gray.700', 'white')}
                      fontSize={'2xl'}
                      fontFamily={'body'}>
                      Dermstore Website
                    </Heading>
                    <Text color={'gray.500'}>
                    Dermstore is US web store which sells cosmetics and skin care products. In 2021, it was acquired by THG plc from Target Corporation for £260.9m and migrated onto the company's Ingenuity e-commerce platform.
                    </Text>
                    <br />
                  </Stack>
                  <Stack ml={"22%"} direction='row' spacing={4}>
                  <a href="https://stately-rabanadas-370a97.netlify.app/" target="_blank">
                  <Button  colorScheme='teal' variant='solid'>
                          Netlify
                        </Button>
                        </a>
                        <a href="https://github.com/furqansup/curvy-plant-804" target="_blank">
                        <Button rightIcon={<ArrowForwardIcon />} colorScheme='teal' variant='outline'>
                          Github
                        </Button>
                        </a>
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
                        'https://user-images.githubusercontent.com/103572350/211360058-94718e40-68b0-46c5-add9-191c18dd1959.png'
                      }
                      layout={'full'}
                    />
                  </Box>
                  <Stack>
                    <Text
                      color={'green.500'}
                      textTransform={'uppercase'}
                      fontWeight={800}
                      fontSize={'md'}
                      letterSpacing={1.1}>
                      3
                    </Text>
                    <Heading
                      color={useColorModeValue('gray.700', 'white')}
                      fontSize={'2xl'}
                      fontFamily={'body'}>
                      Shop.com Website
                    </Heading>
                    <Text color={'gray.500'}>
                    SHOP.COM is a new kind of shopping comparison site that offers the most comprehensive shopping experience on the web. Our shopping experts have drawn on their industry experience to bring you the best collection of the stores.
                    </Text>
                    <br />
                  </Stack>
                  <Stack ml={"22%"} direction='row' spacing={4}>
                  <a href="https://reliable-cuchufli-7e83c6.netlify.app/" target="_blank">
                  <Button  colorScheme='teal' variant='solid'>
                          Netlify
                        </Button>
                        </a>
                        <a href="https://github.com/ankushsin/shy-exchange-4248" target="_blank">
                        <Button rightIcon={<ArrowForwardIcon />} colorScheme='teal' variant='outline'>
                          Github
                        </Button>
                        </a>
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
                        'https://user-images.githubusercontent.com/103572350/211360105-9a83db42-a445-4738-9de2-d81abf65a725.png'
                      }
                      layout={'full'}
                    />
                  </Box>
                  <Stack>
                    <Text
                      color={'green.500'}
                      textTransform={'uppercase'}
                      fontWeight={800}
                      fontSize={'md'}
                      letterSpacing={1.1}>
                      4
                    </Text>
                    <Heading
                      color={useColorModeValue('gray.700', 'white')}
                      fontSize={'2xl'}
                      fontFamily={'body'}>
                      Modesens Website
                    </Heading>
                    <Text color={'gray.500'}>
                    ModeSens is your free, digital shopping assistant — helping you shop from 12,000+ premium brands and 500+ store ModeSens is the premier luxury fashion shopping assistant. Explore, search and find millions of the latest designer products in all one place. 
                    </Text>
                    <br />
                  </Stack>
                  <Stack ml={"22%"} direction='row' spacing={4}>
                  <a href="https://teal-axolotl-dc6e0a.netlify.app/index.html" target="_blank">
                  <Button  colorScheme='teal' variant='solid'>
                          Netlify
                        </Button>
                        </a>
                        <a href="https://github.com/ankits-svg/previous-sound-2568" target="_blank">
                        <Button rightIcon={<ArrowForwardIcon />} colorScheme='teal' variant='outline'>
                          Github
                        </Button>
                        </a>
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
                        'https://user-images.githubusercontent.com/103572350/211360114-e2bbc1ae-4a25-4f6f-906f-ae06a1d3bba0.png'
                      }
                      layout={'full'}
                    />
                  </Box>
                  <Stack>
                    <Text
                      color={'green.500'}
                      textTransform={'uppercase'}
                      fontWeight={800}
                      fontSize={'md'}
                      letterSpacing={1.1}>
                      5
                    </Text>
                    <Heading
                      color={useColorModeValue('gray.700', 'white')}
                      fontSize={'2xl'}
                      fontFamily={'body'}>
                      Nature Basket Website
                    </Heading>
                    <Text color={'gray.500'}>
                    Nature's Basket is an Indian grocery delivery chain of retail stores focused in gourmet food. It has a range of organic food, imported ingredients and exotic foods. The company is headquartered in Mumbai, India.
                    </Text>
                      <br />
                      <br />
                  </Stack>
                  <Stack ml={"22%"} direction='row' spacing={4}>
                  <a href="https://remarkable-sunshine-naturebasketclone.netlify.app/index.html" target="_blank">
                        <Button  colorScheme='teal' variant='solid'>
                          Netlify
                        </Button>
                        </a>
                        <a href="https://drive.google.com/file/d/13V3VxIGkMZJ7L6Nh6coQDUWRxwEBDHnA/view?usp=sharing" target="_blank">
                        <Button rightIcon={<FaVideo />} colorScheme='teal' variant='outline'>
                          Video
                        </Button>
                        </a>
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
                        'https://user-images.githubusercontent.com/103572350/211360121-7113e610-997b-4a00-bdba-c993f64c8e4b.png'
                      }
                      layout={'full'}
                    />
                  </Box>
                  <Stack>
                    <Text
                      color={'green.500'}
                      textTransform={'uppercase'}
                      fontWeight={800}
                      fontSize={'md'}
                      letterSpacing={1.1}>
                      5
                    </Text>
                    <Heading
                      color={useColorModeValue('gray.700', 'white')}
                      fontSize={'2xl'}
                      fontFamily={'body'}>
                      Boost your conversion rate
                    </Heading>
                    <Text color={'gray.500'}>
                    J.Crew Group, Inc., is an American multi-brand, multi-channel, specialty retailer. The company offers an assortment of women's, men's, and children's apparel and accessories, including swimwear, outerwear.
                    </Text>
                    <br />
                    <br/>
              
                  </Stack>
                  <Stack ml={"22%"} direction='row' spacing={4}>
                  <a href="https://incandescent-mooncake-91ae01.netlify.app/" target="_blank">
                  <Button  colorScheme='teal' variant='solid'>
                          Netlify
                        </Button>
                        </a>
                        <a href="https://github.com/rahuljithu123/happy-notebook-3138" target="_blank">
                        <Button rightIcon={<ArrowForwardIcon />} colorScheme='teal' variant='outline'>
                          Github
                        </Button>
                        </a>
                </Stack>
                </Box>
              </Center>
        </Slider>
    </Box>
  )
}

export default Projects


