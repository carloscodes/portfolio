import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react"

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  config: {
    useSystemColorMode: false,
    initialColorMode: "dark"
  },
  styles: {
    global: {
      body: {
        bg: '#111111',
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
    Modal: {
      baseStyle: () => ({
        dialog: {
          maxWidth: ["50%", "50%", "50%"],
          bg: "#111111"
        }
      })
    },
    Drawer: {
      baseStyle: () => ({
        dialog: {
          bg: "#111111"
        }
      })
    }
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
