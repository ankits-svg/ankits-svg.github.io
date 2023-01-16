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


export default function Tech5() {
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
              Dermstore Website
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
                 Dermstore is US web store which sells cosmetics and skin care products. In 2021, it was acquired by THG plc from Target Corporation for £260.9m and migrated onto the company's Ingenuity e-commerce platform.
              </Text>
              
            </VStack>
            
          </Stack>
            <Link href="https://github.com/furqansup/curvy-plant-804" target="_blank"><Button
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
            <Link href="https://stately-rabanadas-370a97.netlify.app/" target="_blank"><Button
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
              'https://user-images.githubusercontent.com/103572350/211360019-4113e21d-050d-4176-b054-9574dd7e8a8e.png'
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