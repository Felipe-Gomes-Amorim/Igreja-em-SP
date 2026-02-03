import { Box, IconButton } from '@chakra-ui/react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { AdSlide } from './AdSlide'
import { ads } from './ads.data'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'

const MotionBox = motion(Box)

export function AdsCarousel() {
  const [index, setIndex] = useState(0)

  const next = () => setIndex((i) => (i + 1) % ads.length)
  const prev = () => setIndex((i) => (i - 1 + ads.length) % ads.length)

  return (
    <Box
      position="relative"
      maxW="900px"
      mx="auto"
      
    >
      <AnimatePresence mode="wait">
        <MotionBox
          key={index}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.4 }}
        >
          <Box px={{ base: 6, md: 20 }} py={{ base: 10, md: 5 }} position="relative">
            <AdSlide {...ads[index]} />
          </Box>
        </MotionBox>
      </AnimatePresence>

      {/* Seta esquerda */}
      <IconButton
        aria-label="Anterior"
        icon={<ChevronLeftIcon boxSize={6} />}
        onClick={prev}
        position="absolute"
        left={2}
        top="50%"
        transform="translateY(-50%)"
        variant="ghost"
      />

      {/* Seta direita */}
      <IconButton
        aria-label="Próximo"
        icon={<ChevronRightIcon boxSize={6} />}
        onClick={next}
        position="absolute"
        right={2}
        top="50%"
        transform="translateY(-50%)"
        variant="ghost"
      />
    </Box>
  )
}
