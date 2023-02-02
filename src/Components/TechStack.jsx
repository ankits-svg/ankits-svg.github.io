import { Box, Container,Avatar, AvatarBadge, AvatarGroup, WrapItem, Wrap, Image, Heading, Tooltip, useClipboard } from '@chakra-ui/react'
import React from 'react'

function TechStack() {
        const { hasCopied, onCopy } = useClipboard('example@example.com');
  return (

   <Container>
    <Heading size='lg' fontSize='50px' color="blue.500">
        Skills
    </Heading>
     <Box display={"flex"} gap={"60px"} ml={"-250px"}>
       
            <Tooltip
            label={hasCopied ? 'Sharmaankit487@yahoo.in' : 'CSS'}
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
            <Tooltip
            label={hasCopied ? 'Sharmaankit487@yahoo.in' : 'JavaScript'}
            closeOnClick={false}
            hasArrow
            >
            <Image
            borderRadius='full'
            boxSize='180px'
            src='https://cdn.svgporn.com/logos/javascript.svg'
            alt='Dan Abramov'
            />
            </Tooltip>
            <Tooltip
            label={hasCopied ? 'Sharmaankit487@yahoo.in' : 'Nodejs'}
            closeOnClick={false}
            hasArrow
            _peerHover={"#2F855A"}
            >
            <Image
            borderRadius='full'
            boxSize='180px'
            src='https://cdn.svgporn.com/logos/nodejs.svg'
            alt='Dan Abramov'
            />
            </Tooltip>
            <Tooltip
            label={hasCopied ? 'Sharmaankit487@yahoo.in' : 'Reactjs'}
            closeOnClick={false}
            hasArrow
            _peerHover={"#2F855A"}
            >
            <Image
            borderRadius='full'
            boxSize='180px'
            src='https://cdn.svgporn.com/logos/react.svg'
            alt='Dan Abramov'
            />
                </Tooltip>
    </Box>  
    <br />
    <Box display={"flex"} gap={"60px"} ml={"-250px"}>
        <Tooltip
            label={hasCopied ? 'Sharmaankit487@yahoo.in' : 'Mongodb'}
            closeOnClick={false}
            hasArrow
            _peerHover={"#2F855A"}
            >
            <Image
            borderRadius='full'
            boxSize='180px'
            src='https://cdn.svgporn.com/logos/mongodb.svg'
            alt='Dan Abramov'
            />
            </Tooltip>
            <Tooltip
            label={hasCopied ? 'Sharmaankit487@yahoo.in' : 'Nextjs'}
            closeOnClick={false}
            hasArrow
            _peerHover={"#2F855A"}
            >
            <Image
            borderRadius='full'
            boxSize='180px'
            src='https://cdn.svgporn.com/logos/nextjs-icon.svg'
            alt='Dan Abramov'
            />
            </Tooltip>
            <Tooltip
            label={hasCopied ? 'Sharmaankit487@yahoo.in' : 'Git'}
            closeOnClick={false}
            hasArrow
            _peerHover={"#2F855A"}
            >
            <Image
            borderRadius='full'
            boxSize='180px'
            src='https://cdn.svgporn.com/logos/git-icon.svg'
            alt='Dan Abramov'
            />
            </Tooltip>
            <Tooltip
            label={hasCopied ? 'Sharmaankit487@yahoo.in' : 'Chakra UI'}
            closeOnClick={false}
            hasArrow
            _peerHover={"#2F855A"}
            >
            <Image
            borderRadius='full'
            boxSize='180px'
            src='https://img.icons8.com/color/344/chakra-ui.png'
            alt='Dan Abramov'
            />
        </Tooltip>
    </Box> 
    <br />
    <Box display={"flex"} gap={"60px"} ml={"-250px"}>
    <Tooltip
            label={hasCopied ? 'Sharmaankit487@yahoo.in' : 'TypeScript'}
            closeOnClick={false}
            hasArrow
            _peerHover={"#2F855A"}
            >
            <Image
            borderRadius='full'
            boxSize='180px'
            src='https://cdn.svgporn.com/logos/typescript-icon.svg'
            alt='Dan Abramov'
            />
            </Tooltip>
            <Tooltip
            label={hasCopied ? 'Sharmaankit487@yahoo.in' : 'Netlify'}
            closeOnClick={false}
            hasArrow
            _peerHover={"#2F855A"}
            >
            <Image
            borderRadius='full'
            boxSize='180px'
            src='https://cdn.svgporn.com/logos/netlify.svg'
            alt='Dan Abramov'
            />
            </Tooltip>
            <Tooltip
            label={hasCopied ? 'Sharmaankit487@yahoo.in' : 'Postman'}
            closeOnClick={false}
            hasArrow
            _peerHover={"#2F855A"}
            >
            <Image
            borderRadius='full'
            boxSize='180px'
            src='https://cdn.svgporn.com/logos/postman-icon.svg'
            alt='Dan Abramov'
            />
            </Tooltip>
            <Tooltip
            label={hasCopied ? 'Sharmaankit487@yahoo.in' : 'GitHub'}
            closeOnClick={false}
            hasArrow
            _peerHover={"#2F855A"}
            >
            <Image
            borderRadius='full'
            boxSize='180px'
            src='https://cdn.svgporn.com/logos/github-icon.svg'
            alt='Dan Abramov'
            />
                </Tooltip>
    </Box> 
   </Container>
  )
}

export default TechStack;

/*
<Tooltip
                    label={hasCopied ? 'Sharmaankit487@yahoo.in' : 'ankits745@gmail.com'}
                    closeOnClick={false}
                    hasArrow
                    >
                    <IconButton
                      aria-label="email"
                      variant="ghost"
                      size="lg"
                      fontSize="3xl"
                      icon={<MdEmail />}
                      _hover={{
                        bg: 'blue.500',
                        color: useColorModeValue('white', 'gray.700'),
                      }}
                      onClick={onCopy}
                      isRound
                    />
                  </Tooltip>
*/