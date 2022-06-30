import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react"

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  styles: {
    global: '#000'
  }
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
