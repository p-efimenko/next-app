import { defineStyleConfig } from '@chakra-ui/react'

export const Button = defineStyleConfig({
  // Styles for the base style
  baseStyle: {
    fontWeight: 'bold',
    color: 'red',
  },
  // Styles for the size variations
  sizes: {
    md: {
      fontSize: '14px',
    },
  },
  // Styles for the visual style variations
  variants: {
    primary: {
      color: 'red',
    },
  },
  // The default `size` or `variant` values
  defaultProps: {
    variant: 'primary',
    size: 'md',
  },
})
