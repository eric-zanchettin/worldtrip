import { Center, Flex, VStack } from '@chakra-ui/react';
import Link from 'next/link';

interface SlideContentProps {
    href: string;
    title: string;
    description: string;
};

export function SlideContent({ href, title, description }: SlideContentProps) {
    return (
        <Link href={`/continents/${href}`} passHref>
            <Flex
                margin="0 auto"
                backgroundImage={`${href}.png`}
                h={450}
                backgroundSize="cover"
                backgroundPosition="center"
                w="90%"
                color="#FFF"
                alignItems="center"
                justify="center"
                cursor="pointer"
            >
                <VStack>
                    <Center fontSize="48px" fontWeight="bold" textShadow="2px 2px 6px black" >
                        {title}
                    </Center>
                    <Center fontSize="24px" fontWeight="bold" textShadow="2px 2px 6px black">
                        {description}
                    </Center>
                </VStack>
            </Flex>
        </Link>
    );
};