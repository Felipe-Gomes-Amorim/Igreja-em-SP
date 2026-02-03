import { Box, Flex, Heading, Text, Image } from '@chakra-ui/react'

interface AdSlideProps {
  image: string
  title: string
  description: string
}

export function AdSlide({ image, title, description }: AdSlideProps) {
  return (
    <Flex
      align="center"
      gap={8}
      direction={{ base: 'column', md: 'row' }}
    >
      {/* Container fixo */}
      <Box
        w={{ base: '160px', md: '220px' }}
        h={{ base: '220px', md: '300px' }}
        flexShrink={0}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Image
          src={image}
          alt={title}
          maxW="100%"
          maxH="100%"
          objectFit="contain"
        />
      </Box>

      {/* Texto */}
      <Box maxW="420px" textAlign={{ base: 'center', md: 'left' }}>
        <Heading size="md">{title}</Heading>
        <Text mt={3} color="gray.500">
          {description}
        </Text>
      </Box>
    </Flex>
  )
}
