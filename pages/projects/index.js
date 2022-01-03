import { Container, Grid } from "@chakra-ui/react"
import ProjectPreview from '../../components/project-preview'

const Products = ({projects}) => {
  const previews = projects.map((project) => <ProjectPreview project={project} showPath="/projects"/>)
  return (
    <Container>
      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        { previews }
      </Grid>
    </Container>
  )
}

export const getStaticProps = () => {
  const exampleProject = {
    main_preview: '/memoji.jpg',
    name: 'Random name',
    description: 'random description for the current project'
  }
  const props = {
    projects: [ exampleProject, exampleProject ]
  }
  return { props }
}

export default Products
