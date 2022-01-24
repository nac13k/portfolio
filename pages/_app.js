import { ChakraProvider, } from '@chakra-ui/react'
import Layout from '../components/layouts/main'
import Fonts from '../components/fonts'
import theme from '../lib/theme'
import React from 'react'
import { SWRConfig } from 'swr'
import fetcher from '../lib/fetcher'


const swrConfig = {
  fetcher
}

const Website = ({Component, pageProps, router}) => {
  return (
    <React.Fragment>
      <SWRConfig value={swrConfig}>
        <ChakraProvider theme={theme}>
        <Fonts />
        <Layout router={router}>
          <Component {...pageProps} key={router.route} />
        </Layout>
      </ChakraProvider>
      </SWRConfig>
    </React.Fragment>

  )
}

export default Website
