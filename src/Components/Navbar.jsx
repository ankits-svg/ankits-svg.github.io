import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from '@chakra-ui/react';
import { DownloadIcon, EmailIcon, InfoIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { FaBookOpen, FaHome, FaProjectDiagram } from 'react-icons/fa';
import { MdOutlineBiotech, MdPermContactCalendar } from 'react-icons/md';

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box bg={useColorModeValue('blue.100', 'blue.100')} px={4} position={"sticky"} top={"0px"} zIndex={"1"}>
        
        <Flex h={16} alignItems={'center'} justifyContent={'end'} gap={"40px"}>
        {/* <Box>Ankit Sharma</Box> */}
          <Button bg={"blue.100"} color={"black"} cursor={'pointer'} leftIcon={<FaHome />} variant='solid'>Home</Button>
          <Button bg={"blue.100"} color={"black"} cursor={'pointer'} leftIcon={<FaBookOpen />} variant='solid'>About</Button>
          <Button bg={"blue.100"} color={"black"} cursor={'pointer'} leftIcon={<MdOutlineBiotech />} variant='solid'>Tech Stack</Button>
          <Button bg={"blue.100"} color={"black"} cursor={'pointer'} leftIcon={<InfoIcon/>} variant='solid'>Skills</Button>
          <Button bg={"blue.100"} color={"black"} cursor={'pointer'} leftIcon={<FaProjectDiagram />} variant='solid'>Projects</Button>
          <Button bg={"blue.100"} color={"black"} cursor={'pointer'} leftIcon={<MdPermContactCalendar/>} variant='solid'>Contacts</Button>
          <Link href='https://drive.google.com/file/d/1M85yN5EJ6L-yrn1JrZu6gO9pk05lOQi-/view?usp=share_link' target={"_blank"} textDecorationLine={"none"}><Button bg={"blue.300"} color={"white"} cursor={'pointer'} leftIcon={<DownloadIcon />} variant='solid'>Resume</Button></Link>
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    
                    size={'sm'}
                    src={'https://user-images.githubusercontent.com/103572350/210402106-ccd95344-0d81-4d8a-bd15-7883aad24a1c.png'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={'https://user-images.githubusercontent.com/103572350/210402106-ccd95344-0d81-4d8a-bd15-7883aad24a1c.png'}
                    />
                  </Center>
                  <br />
                  <Center>
                    <Link href='https://github.com/ankits-svg' target={"_blank"}><p>ankits-svg</p></Link>
                  </Center>
                  <br />
                  <MenuDivider />
                  {/* <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem>Logout</MenuItem> */}
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}