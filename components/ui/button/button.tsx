import React from 'react'

import {
  Button as ChakraButton,
  ButtonProps,
  useStyleConfig,
} from '@chakra-ui/react'

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    //
    const { children, variant, size, colorScheme, ...rest } = props

    const styles = useStyleConfig('Button', { variant, size, colorScheme })

    return (
      <ChakraButton externalref={ref} __css={styles} {...rest}>
        {children}
      </ChakraButton>
    )
  }
)

Button.displayName = 'Button'
