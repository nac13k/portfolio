import { theme as chakraTheme } from '@chakra-ui/react'
import { extendTheme } from "@chakra-ui/react"

const overrides = {
  ...chakraTheme,
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  }
}

const theme = extendTheme(overrides)

export default theme
