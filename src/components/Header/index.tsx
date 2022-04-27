import { HStack, Icon, Text, Image, } from '@chakra-ui/react';
import { useRouter } from "next/router";
import { IoIosArrowBack } from 'react-icons/io';

export function Header() {
    const route = useRouter();

    return (
        <HStack
            as="header"
            display="grid"
            gridTemplateColumns={["26% 50%", "26% 50%", "37% 50%", "43% 50%"]}
            alignItems="center"
            p="4"
        >
            {route.asPath !== "/"
                ?
                    <Icon as={IoIosArrowBack} fontSize="20" onClick={route.back} cursor="pointer" />
                :
                    <Text></Text>
            }
            <Image
                src="/Logo.png"
                alt="Worldtrip Logo"
                w={200}
            />
        </HStack>
    );
};