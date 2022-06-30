import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
// 1. Import `extendTheme`
import { extendTheme, DarkMode } from "@chakra-ui/react"

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  config: {
    useSystemColorMode: false,
    initialColorMode: "dark"
  },
  styles: {
    global: {
      body: {
        bg: '#000',
        color: 'white',
      },
    }
  },
  components: {
    Button: {
      defaultProps: {
        colorScheme: 'transparent'
      }
    },
  },
})

function MyApp({ Component, pageProps }: AppProps ) {
  return (
    <ThemeProvider>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </ThemeProvider>
  )
}

export default MyApp
