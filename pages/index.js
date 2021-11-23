import { Container, Box, Heading, Image, useColorModeValue } from '@chakra-ui/react'
import Section from '../components/section'

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
      <Box borderRadius="lg"
           bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
           p={3}
           mb={6}
           align="center">
        Hello, I'm a Software engineer based in M&eacute;xico.
      </Box>
      <Box display={{ md: 'flex'}} mb={6}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Lumbreras
          </Heading>
          <p>Digital Artisan (Software Architect / Coder)</p>
        </Box>
      </Box>

      <Section delay={0.1} mt={12}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <p>I have always been involved in each stage of software development and building products, leading developer teams, planning the software project architectures, managing servers, researching new technologies to reduce cost and writing internal libraries and code for projects.</p>
      </Section>
    </Container>
  )
}

export default Page
