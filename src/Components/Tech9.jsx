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
  
  
  export default function Tech9() {
    return (
      <Container maxW={'7xl'}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}>
          
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={'header'}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                J.Crew Website
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
                  J.Crew Group, Inc., is an American multi-brand, multi-channel, specialty retailer. The company offers an assortment of women's, men's, and children's apparel and accessories, including swimwear, outerwear.
                </Text>
                
              </VStack>
              
            </Stack>
              <Link href="https://github.com/rahuljithu123/happy-notebook-3138" target="_blank">
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
              GitHub
            </Button></Link>
              <Link href="https://incandescent-mooncake-91ae01.netlify.app/" target="_blank">
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
            <Flex>
            <Image
              rounded={'30%'}
              alt={'product image'}
              src={
                'https://user-images.githubusercontent.com/103572350/211360121-7113e610-997b-4a00-bdba-c993f64c8e4b.png'
              }
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={{ base: '100%', sm: '400px', lg: '500px' }}
            />
          </Flex>
          
        </SimpleGrid>
      </Container>
    );
  }