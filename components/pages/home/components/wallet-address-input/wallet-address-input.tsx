import React, { useState, useEffect } from 'react'
import { Input, Box } from '@chakra-ui/react'
import { useDebounce } from 'react-use'

// import cn from 'classnames'
import styles from './wallet-address-input.module.sass'

interface Props {
  //
  value?: string
  onChange?: (value: string) => void
}

export const WalletAddressInput: React.FC<Props> = (props) => {
  //
  const { value, onChange } = props

  const [internalValue, setInternalValue] = useState<string>('')
  const [debouncedValue, setDebouncedValue] = useState<string>('')

  useDebounce(
    () => {
      setDebouncedValue(internalValue)
      onChange?.(internalValue)
    },
    500,
    [internalValue]
  )

  useEffect(() => {
    if (value) {
      setInternalValue(value)
    }
  }, [value])

  const internalOnChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    //
    const value = event.target.value
    setInternalValue(value)
  }

  return (
    <Box className={styles.Wrapper}>
      <Input
        placeholder="Enter wallet address"
        className={styles.Input}
        value={internalValue}
        onChange={internalOnChange}
      />
    </Box>
  )
}
