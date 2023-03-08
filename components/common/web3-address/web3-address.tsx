import React from 'react'

import { Box, BoxProps } from '@chakra-ui/react'

export interface Web3AddressProps extends BoxProps {
  address: string
  preffixLenght?: number
  startLength?: number
  endLength?: number
}

export const Web3Address: React.FC<Web3AddressProps> = (props) => {
  //
  const {
    address,
    preffixLenght = 2,
    startLength = 4,
    endLength = 4,
    ...rest
  } = props

  const preffix = address.slice(0, preffixLenght)
  const start = address.slice(preffixLenght, startLength + preffixLenght)
  const end = address.slice(address.length - endLength, address.length)

  return (
    <Box {...rest}>
      {preffix}
      {start}...{end}
    </Box>
  )
}

Web3Address.displayName = 'Web3Address'
