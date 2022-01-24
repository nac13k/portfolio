import { Container, Box, Heading, Image, useColorModeValue } from '@chakra-ui/react'
import { BioSection, BioYear, BioCompany } from '../components/bio'
import Section from '../components/section'

const Page = () => {
  return (
    <Container>
      <Box align="center" mb={6}>
        <Image
          borderColor="whiteAlpha.800"
          borderWidth={2}
          borderStyle="solid"
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
        Hello, I&apos;m a Software engineer based in M&eacute;xico.
      </Box>
      <Box display={{ md: 'flex'}} mb={6}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Lumbreras
          </Heading>
          <p>Digital Artisan (Software Architect / Coder)</p>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <p>
          I have always been involved in each stage of software development and 
          building products, leading developer teams, planning the software project architectures,
          managing servers, researching new technologies to reduce cost and writing internal
          libraries and code for projects.
        </p>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2012</BioYear>
            Worked as full-stack developer at
          <BioCompany>Rubixware</BioCompany>
        </BioSection>

        <BioSection>
          <BioYear>2015</BioYear>
            Got a position as Software Engineer at
          <BioCompany>Bitlab</BioCompany>
        </BioSection>

        <BioSection>
          <BioYear>2018</BioYear>
            Took a Scrum Master course given by
          <BioCompany>CertiProf</BioCompany>
        </BioSection>

        <BioSection>
          <BioYear>2019</BioYear>
            Got a position as Software Engineer at
          <BioCompany>Origon</BioCompany>
        </BioSection>

        <BioSection>
          <BioYear>2020</BioYear>
            Took a course about PKI Cryptography given by
          <BioCompany>Factory Tec</BioCompany>
        </BioSection>

        <BioSection>
          <BioYear>2020</BioYear>
            Promoted to Software Architect at
          <BioCompany>Origon</BioCompany>
        </BioSection>
      </Section>
    </Container>
  )
}

export default Page
