import { extendTheme } from "@chakra-ui/react"
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#f0e7db', '#202023')(props)
    }
  })
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      },
      'project-name': {
        textDecoration: 'underline',
        fontSize: 16,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      }
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode('#444444', '#f3f6f4')(props),
      textUnderlineOffset: 3
    }),
    variants: {
      'menu-item': (props) => ({
        textDecoration: 'none',
        px: 2,
        py: 1,
        rounded: 'md',
        _focus: {
          boxShadow: 'none',
        },
        _hover: {
          textDecoration: 'none',
          bg: mode('gray.200', 'gray.700')(props),
        }
      })
    }
  }
}

const fonts = {
  heading: "'M PLUS Rounded 1c'"
}

const colors = {
  grassTeal: '#88ccca',
  'menu.light': '#e8ddcd',
}

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
}

const theme = extendTheme({ config, styles, components, fonts, colors})

export default theme
