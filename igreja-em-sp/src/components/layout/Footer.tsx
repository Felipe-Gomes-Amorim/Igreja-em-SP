import {
  Box,
  Flex,
  Text,
  Link,
  HStack,
  VStack,
  IconButton,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

export function Footer() {
  const { colorMode, toggleColorMode } = useColorMode()
  const bg = useColorModeValue('white', 'gray.900')

  const dashedLine = {
    light:
      'repeating-linear-gradient(to right, #ddd, #ddd 6px, transparent 6px, transparent 14px)',
    dark:
      'repeating-linear-gradient(to right, #555, #555 6px, transparent 6px, transparent 14px)',
  }

  return (
    <Box
      as="footer"
      bg={bg}
      position="relative"
      _before={{
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '1px',
        backgroundImage:
          colorMode === 'dark' ? dashedLine.dark : dashedLine.light,
        backgroundSize: '20px 1px',
        animation: 'dash 160s linear infinite',
      }}
    >
      <Flex
        px={{ base: 4, md: 8 }}
        py={10}
        maxW="container.xl"
        mx="auto"
        justify="space-between"
        flexWrap="wrap"
        gap={10}
      >
        {/* Coluna esquerda */}
        <VStack align="start" spacing={2}>
          <Text fontWeight={500}>Outros Sites</Text>
          <Link>Site 1</Link>
          <Link>Site 2</Link>
          <Link>Site 3</Link>
          <Link>Site 4</Link>
          <Link>Site 5</Link>
        </VStack>

        {/* Coluna central */}
        <VStack align="start" spacing={2}>
          <Text fontWeight={500}>Contato</Text>
          <Link>Email</Link>
          <Link>LinkedIn</Link>
          <Link>GitHub</Link>
        </VStack>

        {/* Coluna direita */}
        <VStack align="start" spacing={4}>
          <Text fontWeight={500}>Preferências</Text>

          {/* Toggle dark/light */}
          <HStack>
            <IconButton
              aria-label="Alternar tema"
              icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
              size="sm"
              onClick={toggleColorMode}
            />
            <Text fontSize="sm">
              {colorMode === 'dark' ? 'Light mode' : 'Dark mode'}
            </Text>
          </HStack>

          {/* Idiomas (vamos ligar isso já já) */}
          <HStack spacing={3} fontSize="sm">
            <Link>Português</Link>
            <Link>Inglês</Link>
            <Link>Coreano</Link>
            <Link>Chinês</Link>
            <Link>Taiwanês</Link>
          </HStack>
        </VStack>
      </Flex>
    </Box>
  )
}
