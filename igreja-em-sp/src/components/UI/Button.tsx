import { Button as ChakraButton, useColorModeValue } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

interface ButtonProps {
  label: string
  href: string
  external?: boolean
}

export function Button({ label, href, external }: ButtonProps) {
  const borderColor = useColorModeValue('black', 'white')
  const textColor = borderColor
  const hoverBg = borderColor
  const hoverText = useColorModeValue('white', 'black')

  return (
    <ChakraButton
      as={external ? 'a' : RouterLink}
      {...(external ? { href } : { to: href })}
      variant="unstyled"
      border="2px solid"
      borderColor={borderColor}
      bg="transparent"
      color={textColor}
      rounded="xl"
      px={6}
      py={5}
      fontWeight="medium"
      _hover={{
        bg: hoverBg,
        color: hoverText,
      }}
      _active={{
        transform: 'scale(0.98)',
      }}
      transition="all 0.25s ease"
    >
      {label}
    </ChakraButton>
  )
}
