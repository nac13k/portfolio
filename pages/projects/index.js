import { Container, Grid } from "@chakra-ui/react"
import useSWR from "swr"
import ProjectPreview from '../../components/project-preview'
import fetcher from '../../lib/fetcher'

const Products = ({ projects }) => {
  const { data }  = useSWR("/public/v1/projects", { fallbackData: projects })
  console.log("wea", data)

  const previews = data.map((project, index) => <ProjectPreview key={index} project={project} showPath="/projects"/>)
  return (
    <Container>
      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        { previews }
      </Grid>
    </Container>
  )
}

export const getStaticProps = async () => {
  const { data } = await fetcher('/public/v1/projects')

  const props = {
    projects: data
  }
  return { props }
}

export default Products
