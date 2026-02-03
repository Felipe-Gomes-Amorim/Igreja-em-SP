import {
    Box,
    Heading,
    Text,
    useColorModeValue,
    Link,
} from '@chakra-ui/react'
import { Button } from '../UI/Button'


interface SectionProps {
    title: string
    description: string
    align?: 'left' | 'right'
    variant?: 'muted' | 'white'
    backgroundImage?: string
    overlay?: boolean
    button?: {
        label: string
        href: string
        external?: boolean
    }
}

function renderTextWithLinks(
    text: string,
    links: Record<string, { label: string; href: string }>
) {
    return text.split(/(\{.*?\})/g).map((part, i) => {
        const key = part.replace(/[{}]/g, '')

        if (links[key]) {
            return (
                <Link
                    key={i}
                    isExternal
                    href={links[key].href}
                    color="blue.500"
                    fontWeight="medium"
                >
                    {links[key].label}
                </Link>
            )
        }

        return part
    })
}

export function Section({
    title,
    description,
    align = 'left',
    variant = 'muted',
    backgroundImage,
    overlay = true,
    button,
}: SectionProps) {
    const bgColor = useColorModeValue(
        variant === 'white' ? 'white' : 'gray.100',
        variant === 'white' ? 'gray.800' : 'gray.700'
    )

    const overlayColor = useColorModeValue(
        'rgba(255,255,255,0.75)',
        'rgba(0,0,0,0.6)'
    )

    return (
        <Box
            position="relative"
            bgImage={backgroundImage ? `url(${backgroundImage})` : undefined}
            bgSize="cover"
            bgPosition="center"
            py={{ base: 12, md: 20 }}
            bg={!backgroundImage ? bgColor : undefined}
        >

            {/* Overlay */}
            {backgroundImage && overlay && (
                <Box
                    position="absolute"
                    inset={0}
                    bg={overlayColor}
                />
            )}

            {/* Conteúdo */}
            <Box
                position="relative"
                zIndex={1}
                maxW="1200px"
                mx="auto"
                px={6}
                textAlign={align === 'right' ? 'right' : 'left'}
            >
                <Heading size="lg" mb={4}>
                    {title}
                </Heading>

                <Text whiteSpace="pre-line">
                    {renderTextWithLinks(description, {
                        link: {
                            label: 'https://lordsmove.org/offerings.html',
                            href: 'https://lordsmove.org/offerings.html',
                        },
                    })}

                </Text>
                {button && (
                    <Box mt={12}>
                        <Button
                            label={button.label}
                            href={button.href}
                            external={button.external}
                        />
                    </Box>
                )}

            </Box>
        </Box>
    )
}
