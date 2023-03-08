import { extendBaseTheme } from '@chakra-ui/react'

import * as components from './components'
import { colors } from './colors'

import { Readex_Pro } from 'next/font/google'

const poppins = Readex_Pro({
  style: ['normal'],
  subsets: ['latin'],
})

export const theme = extendBaseTheme({
  components,
  colors,
  fonts: {
    heading: `${poppins.style.fontFamily};, sans-serif`,
    body: `${poppins.style.fontFamily}, sans-serif`,
  },
})
