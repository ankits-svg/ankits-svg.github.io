import { ArrowForwardIcon } from '@chakra-ui/icons';
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
 
  
  export default function Simple() {
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
                'https://user-images.githubusercontent.com/103572350/211359968-cb35eda4-80c2-48c9-9340-420d512640ce.png'
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
                Friend's Fashion Adda
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
                  Friend's Fashion Adda is the fashion e-commerce startup that stands out from the rest. It offers a trendy collection of apparel based on dazzling and upbeat designs that resonate with the millennials.
                </Text>
                
              </VStack>
              
            </Stack>
  
            <Link href="https://github.com/ankits-svg/-celestial-pie-5247" target="_blank" textDecoration={"none"}>
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
            </Button>
            </Link>
            <Link href="https://friendsfashionadda.netlify.app/" target="_blank">
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
            </Button>
            </Link>
            
          </Stack>
        </SimpleGrid>
      </Container>
    );
  }