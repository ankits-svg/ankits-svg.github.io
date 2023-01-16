import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
  } from '@chakra-ui/react';
  import { FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
  import { ReactNode } from 'react';
import { PhoneIcon } from '@chakra-ui/icons';
  
  const Logo = (props) => {
    return (
      <svg
        height={32}
        viewBox="0 0 120 28"
        xmlns="https://user-images.githubusercontent.com/103572350/212715099-ead64cbf-28dd-4efb-85ae-9f81ddbae1c1.png"
        {...props}>
        <path
          d="https://user-images.githubusercontent.com/103572350/212715099-ead64cbf-28dd-4efb-85ae-9f81ddbae1c1.png"
          fill="currentColor"
        />
        <path
          d="https://user-images.githubusercontent.com/103572350/212715099-ead64cbf-28dd-4efb-85ae-9f81ddbae1c1.png"
          fill="#2F855A"
        />
      </svg>
    );
  };
  
  const SocialButton = ({
    children,
    label,
    href,
  }) => {
    return (
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  
  export default function Footer() {
    return (
      <Box
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
          <Logo />
          <Text>© 2023 Ankit Sharma. All rights reserved | 8953453088 | ankits745@gmail.com</Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'GitHub'} href={'https://github.com/ankits-svg'} target="_blank" >
            <FaGithub   cursor="pointer" />
            </SocialButton>

            <SocialButton label={'linkedin'} href={'https://www.linkedin.com/in/ankit-sharma-b324a8107/'}>
              <FaLinkedin />
            </SocialButton>
           
            <SocialButton label={'Contact'}>
              <PhoneIcon /> 
              {/* <h4>8953453088</h4> */}
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    );
  }