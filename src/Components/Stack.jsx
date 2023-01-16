import { Box, Container, Image, SimpleGrid, Tooltip } from '@chakra-ui/react'
import React from 'react'

export const Stack = () => {
  return (
    <Container>
        <SimpleGrid minChildWidth='120px' spacing='40px'>
        <Box bg='tomato' height='80px'>
        <Tooltip
            label={'CSS'}
            closeOnClick={false}
            hasArrow
            _peerHover={"#2F855A"}
            >
            <Image
            borderRadius='full'
            boxSize='180px'
            src='https://cdn.svgporn.com/logos/css-3.svg'
            alt='Dan Abramov'
            />
            </Tooltip>
        </Box>
        <Box bg='tomato' height='80px'></Box>
        <Box bg='tomato' height='80px'></Box>
        <Box bg='tomato' height='80px'></Box>
        <Box bg='tomato' height='80px'></Box>
        <Box bg='tomato' height='80px'></Box>
        </SimpleGrid>
    </Container>
  )
}
