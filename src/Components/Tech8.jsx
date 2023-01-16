import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    Link,
    
  } from '@chakra-ui/react';
 
  
  export default function Tech8() {
    return (
      <Container maxW={'7xl'}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}>
          <Flex>
            <Image
              rounded={'30%'}
              alt={'product image'}
              src={
                'https://user-images.githubusercontent.com/103572350/211360114-e2bbc1ae-4a25-4f6f-906f-ae06a1d3bba0.png'
              }
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={{ base: '100%', sm: '400px', lg: '500px' }}
            />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={'header'}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                Nature Basket Website
              </Heading>
              
            </Box>
  
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={'column'}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.200', 'gray.600')}
                />
              }>
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text
                  color={useColorModeValue('gray.500', 'gray.400')}
                  fontSize={'2xl'}
                  fontWeight={'300'}>
                  Nature's Basket is an Indian grocery delivery chain of retail stores focused in gourmet food. It has a range of organic food, imported ingredients and exotic foods. The company is headquartered in Mumbai, India.
                </Text>
                
              </VStack>
              
            </Stack>
              <Link href="https://drive.google.com/file/d/13V3VxIGkMZJ7L6Nh6coQDUWRxwEBDHnA/view?usp=sharing" target="_blank">
              <Button
              rounded={'none'}
              w={'full'}
              mt={8}
              size={'lg'}
              py={'7'}
              bg={useColorModeValue('blue.500', 'gray.50')}
              color={useColorModeValue('white', 'gray.900')}
              textTransform={'uppercase'}
              _hover={{
                transform: 'translateY(2px)',
                boxShadow: 'lg',
              }}>
              Video
            </Button></Link>
              <Link href="https://remarkable-sunshine-naturebasketclone.netlify.app/index.html" target="_blank">
              <Button
              rounded={'none'}
              w={'full'}
              mt={8}
              size={'lg'}
              py={'7'}
              bg={useColorModeValue('blue.200', 'gray.50')}
              color={useColorModeValue('white', 'gray.900')}
              textTransform={'uppercase'}
              _hover={{
                transform: 'translateY(2px)',
                boxShadow: 'lg',
              }}>
              Netlify
            </Button></Link>
            
            
            
          </Stack>
        </SimpleGrid>
      </Container>
    );
  }