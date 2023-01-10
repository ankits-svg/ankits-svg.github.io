import { Box, Container, Heading, Image } from '@chakra-ui/react'
import React from 'react'

function GitStats() {
  return (
    // <div>GitStats</div>
    <Container>
        <Heading size='lg' fontSize='50px' color="#F56565">
        GitStats
    </Heading>
    <Box>
        <img src='https://user-images.githubusercontent.com/103572350/211622826-9a68da6f-1042-4196-b808-9b7e3ff37bcd.png' alt="error"/>
    </Box>
    </Container>
  )
}

export default GitStats