import { Flex, Box, Link, Image, useColorMode, useColorModeValue } from '@chakra-ui/react'
import logoLight from '../../assets/logo/Logo.png'
import logoDark from '../../assets/logo/DarkLogo.png'

export function Header() {
  const { colorMode } = useColorMode()
  const bg = useColorModeValue('white', 'gray.900')
  const logo = colorMode === 'light' ? logoLight : logoDark

  const dashedLine = {
    light:
      'repeating-linear-gradient(to right, #ccc, #ccc 6px, transparent 6px, transparent 14px)',
    dark:
      'repeating-linear-gradient(to right, #555, #555 6px, transparent 6px, transparent 14px)',
  }

  return (
    <Flex
      as="header"
      h={{ base: '64px', md: '88px' }}
      px={{ base: 4, md: 8 }}
      align="center"
      justify="space-between"
      bg={bg}
      position="relative"
      _after={{
        content: '""',
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '1px',
        backgroundImage:
          colorMode === 'dark' ? dashedLine.dark : dashedLine.light,
        backgroundSize: '20px 1px',
        animation: 'dash 160s linear infinite',
      }}
    >
      {/* Logo */}
      <Image
        src={logo}
        alt="Logo"
        h={{ base: '100px', sm: '128px', md: '164px' }}
        maxW={{ base: '120px', md: '160px' }}
        objectFit="contain"
      />

      {/* Centro */}
      <Box>
        <Link fontFamily="Montserrat, sans-serif" fontWeight={300}>
          Calendário
        </Link>
      </Box>

      {/* Direita */}
      <Box>
        <Link fontFamily="Montserrat, sans-serif" fontWeight={300}>
          Login
        </Link>
      </Box>
    </Flex>
  )
}
