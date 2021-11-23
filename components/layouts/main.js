import Head from 'next/head'
import { Box, ColorModeScript, Container } from '@chakra-ui/react'
import ColorMode from './color-mode'
import theme from '../../lib/theme'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>Lumbreras &lt;@nac13k&gt;</title>
      </Head>

      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Box align="right" p={3}>
            <ColorMode/>
          </Box>
        <Container maxW="container.md" pt={14}>
          {children}
        </Container>
      </body>
    </Box>
  )
}

export default Main
