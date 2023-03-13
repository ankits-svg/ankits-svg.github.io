import { ReactNode, useState } from 'react';
import './Navbar.css'
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
  SimpleGrid,
} from '@chakra-ui/react';
import { DownloadIcon, EmailIcon, InfoIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { FaBookOpen, FaHome, FaProjectDiagram } from 'react-icons/fa';
import { MdOutlineBiotech, MdPermContactCalendar } from 'react-icons/md';
import { transform } from 'framer-motion';

// const NavLink = ({ children }) => (
//   <Link
//     px={2}
//     py={1}
//     rounded={'md'}
//     _hover={{
//       textDecoration: 'none',
//       bg: useColorModeValue('gray.200', 'gray.700'),
//     }}
//     href={'#'}>
//     {children}
//   </Link>
// );



export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showNavList, setShowNavList] = useState(false);

  const toggleNavList = (id) => {
    var element = document.getElementById(id);
    if (element) {
      element.scrollIntoView();
    }
    setShowNavList(!showNavList);
  };
  return (
    <div className="nav-menu">
      <Box   bg={useColorModeValue('#FFE715', 'blue.100')} px={4} position={"fixed"} zIndex={"1"} top={"0px"} w={"100%"}>

        
        <Flex h={16} alignItems={'center'} justifyContent={'end'} gap={"40px"}>
        
          <a href="#home"
          onClick={() => toggleNavList("#home")}
          >
          <Button bg={"#101920"} color={"#FFE715"} cursor={'pointer'} leftIcon={<FaHome color="#FFE715"/>} variant='solid'>Home</Button>
          </a>


          <a href="#about"
          onClick={() => toggleNavList("#about")}>
          <Button  bg={"#101920"} color={"#FFE715"} cursor={'pointer'} leftIcon={<FaBookOpen />} variant='solid' >About</Button>
          </a>

          <a href="#skills"
          onClick={() => toggleNavList("#skills")}>
          <Button  bg={"#101920"} color={"#FFE715"} cursor={'pointer'} leftIcon={<InfoIcon/>} variant='solid'>Skills</Button>
          </a>


          <a href="#projects"
          onClick={() => toggleNavList("#projects")}>
              <Button  bg={"#101920"} color={"#FFE715"} cursor={'pointer'} leftIcon={<FaProjectDiagram />} variant='solid'>Projects</Button>
          </a>
          <a href="#contacts"
          onClick={() => toggleNavList("#contacts")}>
            <Button  bg={"#101920"} color={"#FFE715"} cursor={'pointer'} leftIcon={<MdPermContactCalendar/>} variant='solid'>Contacts</Button>
          </a>
          
          
          
          
          <Link href='https://github.com/ankits-svg/ankits-svg.github.io/files/10570758/Ankit_Sharma_Resume.pdf' target={"_blank"} rel="noreferrer" download="Ankit_Sharma_Resume"><Button  bg={"#101920"} color={"#FFE715"} cursor={'pointer'} leftIcon={<DownloadIcon />} variant='solid' >Resume</Button></Link>
          
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              {/* <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button> */}

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
    </div>
  );
}