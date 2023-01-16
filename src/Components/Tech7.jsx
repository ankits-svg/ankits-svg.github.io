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
  
  
  export default function Tech7() {
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
                 Modesens Website
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
                  ModeSens is your free, digital shopping assistant — helping you shop from 12,000+ premium brands and 500+ store ModeSens is the premier luxury fashion shopping assistant. Explore, search and find millions of the latest designer products in all one place. 
                </Text>
                
              </VStack>
              
            </Stack>
              <Link href="https://github.com/ankits-svg/previous-sound-2568" target="_blank">
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
              <Link href="https://teal-axolotl-dc6e0a.netlify.app/index.html" target="_blank">
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
                'https://user-images.githubusercontent.com/103572350/211360105-9a83db42-a445-4738-9de2-d81abf65a725.png'
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