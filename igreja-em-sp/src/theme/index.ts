import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme = extendTheme({
  config,
  styles: {
    global: {
      '@keyframes dash': {
        from: { backgroundPosition: '0 0' },
        to: { backgroundPosition: '100% 0' },
      },
    },
  },
})

export default theme
