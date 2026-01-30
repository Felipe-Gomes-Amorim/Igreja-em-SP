// src/components/layout/PageLayout.tsx
import { Box, Flex } from '@chakra-ui/react'
import { Header } from './header'
import { Footer } from './Footer'

export function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <Flex direction="column" minH="100vh">
      <Header />

      {/* Conteúdo principal */}
      <Box as="main" flex="1">
        {children}
      </Box>

      <Footer />
    </Flex>
  )
}
