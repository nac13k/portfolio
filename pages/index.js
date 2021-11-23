import { Container, Box, Heading, Image } from '@chakra-ui/react'

const Page = () => {
  return (
    <Container>
      <Box align="center" mb={6}>
        <Image
          borderRadius="full"
          boxSize="150px"
          src="memoji.jpg"
          alt="profile picture"
          fallbackSrc="https://via.placeholder.com/150"
        />
      </Box>
      <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
        Hello, I'm a Software engineer based in M&eacute;xico.
      </Box>
      <Box display={{ md: 'flex'}}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Lumbreras
          </Heading>
          <p>Software engineer</p>
        </Box>
      </Box>
    </Container>
  )
}

export default Page
