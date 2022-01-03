import { Box, Image, Heading, GridItem } from "@chakra-ui/react"
import Section from './section'

const ProjectPreview = ({project, showPath}) => {
  return (
    <GridItem>
      <Section>
        <Box p={3} mb={2} flexDirection="row">
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            borderRadius="full"
            boxSize="150px"
            src="/memoji.jpg"
            alt="profile picture"
            fallbackSrc="https://via.placeholder.com/150"
            />
          <Section>
            <Heading as="h3" variant="project-name">{project.name}</Heading>
            <p>
              {project.description}
            </p>
          </Section>
        </Box>
      </Section>
    </GridItem>
  )
}

export default ProjectPreview
