import {
  Box,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'

interface SectionProps {
  title: string
  description: string
  align?: 'left' | 'right'
  variant?: 'muted' | 'white'
}

export function Section({
  title,
  description,
  align = 'left',
  variant = 'muted',
}: SectionProps) {
  const bg = useColorModeValue(
    variant === 'white' ? 'white' : 'gray.100',
    variant === 'white' ? 'gray.800' : 'gray.700'
  )

  return (
    <Box bg={bg} py={{ base: 12, md: 20 }}>
      <Box
        maxW="1200px"
        mx="auto"
        px={6}
        textAlign={align === 'right' ? 'right' : 'left'}
      >
        <Heading size="lg" mb={4}>
          {title}
        </Heading>

        <Text
          maxW="600px"
          ml={align === 'right' ? 'auto' : 0}
          color="gray.500"
        >
          {description}
        </Text>
      </Box>
    </Box>
  )
}
