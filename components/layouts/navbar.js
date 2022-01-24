import {
  Box,
  Flex,
  HStack,
  Link as ChakraLink,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import Link from 'next/link'
import ColorMode from './color-mode'


const NavLink = ({ children, href }) => (
  <Link href={href} passHref>
    <ChakraLink variant="menu-item">
      {children}
    </ChakraLink>
  </Link>
);

export default function Navbar({ links, brandName }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        bg={useColorModeValue('menu.light', 'gray.900')}
        px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
            />
          <HStack spacing={8} alignItems={'center'}>
            <Box fontWeight="600">{brandName}</Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {links.map((link) => (
                <NavLink key={link.name} href={link.path}>{link.name}</NavLink>
              ))}
            </HStack>
          </HStack>
          <ColorMode/>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {links.map((link) => (
                <NavLink key={link.name} href={link.path}>{link.name}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
      </>
  );
}

