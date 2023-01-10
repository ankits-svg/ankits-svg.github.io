import { Box, Container,Avatar, AvatarBadge, AvatarGroup, WrapItem, Wrap, Image, Heading } from '@chakra-ui/react'
import React from 'react'

function TechStack() {
  return (

   <Container>
    <Heading size='lg' fontSize='50px' color="#F56565">
        Tech Stack
    </Heading>
     <Box display={"flex"} gap={"60px"} ml={"-250px"}>
       
            <Image
            borderRadius='full'
            boxSize='180px'
            src='https://cdn.svgporn.com/logos/css-3.svg'
            alt='Dan Abramov'
            />
            <Image
            borderRadius='full'
            boxSize='180px'
            src='https://cdn.svgporn.com/logos/javascript.svg'
            alt='Dan Abramov'
            />
            <Image
            borderRadius='full'
            boxSize='180px'
            src='https://cdn.svgporn.com/logos/nodejs.svg'
            alt='Dan Abramov'
            />
            <Image
            borderRadius='full'
            boxSize='180px'
            src='https://cdn.svgporn.com/logos/react.svg'
            alt='Dan Abramov'
            />
        
    </Box>  
    <br />
    <Box display={"flex"} gap={"60px"} ml={"-250px"}>
       
            <Image
            borderRadius='full'
            boxSize='180px'
            src='https://cdn.svgporn.com/logos/mongodb.svg'
            alt='Dan Abramov'
            />
            <Image
            borderRadius='full'
            boxSize='180px'
            src='https://cdn.svgporn.com/logos/nextjs-icon.svg'
            alt='Dan Abramov'
            />
            <Image
            borderRadius='full'
            boxSize='180px'
            src='https://cdn.svgporn.com/logos/git-icon.svg'
            alt='Dan Abramov'
            />
            <Image
            borderRadius='full'
            boxSize='180px'
            src='https://img.icons8.com/color/344/chakra-ui.png'
            alt='Dan Abramov'
            />
        
    </Box> 
    <br />
    <Box display={"flex"} gap={"60px"} ml={"-250px"}>
       
            <Image
            borderRadius='full'
            boxSize='180px'
            src='https://cdn.svgporn.com/logos/typescript-icon.svg'
            alt='Dan Abramov'
            />
            <Image
            borderRadius='full'
            boxSize='180px'
            src='https://cdn.svgporn.com/logos/netlify.svg'
            alt='Dan Abramov'
            />
            <Image
            borderRadius='full'
            boxSize='180px'
            src='https://cdn.svgporn.com/logos/postman-icon.svg'
            alt='Dan Abramov'
            />
            <Image
            borderRadius='full'
            boxSize='180px'
            src='https://cdn.svgporn.com/logos/github-icon.svg'
            alt='Dan Abramov'
            />
        
    </Box> 
   </Container>
  )
}

export default TechStack