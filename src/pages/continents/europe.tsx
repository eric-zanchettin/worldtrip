import { Flex, Box, Text, } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Header } from "../../components/Header";

export default function Continents() {
    const router = useRouter();
    let { continent } = router.query;
    continent = String(continent);

    return (
        <>
            <Header />

            <Box backgroundImage={`/europe-page.png`}>
                <Text
                    fontSize="48px"
                    fontWeight="bold"
                    color="#FFF"
                    p="340px 0 80px 140px"
                    textShadow="2px 2px 6px black"
                >
                    Europa
                </Text>

            </Box>

            <Flex mt="12" ml="36" mr="36" mb="16" justify="space-between" align="center">
                <Box fontSize="18" textAlign="justify" w={400}>
                    A Europa é, por convenção, um dos seis, continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste.
                </Box>

                <Box display="grid" gridTemplateColumns="1fr 1fr 1fr" columnGap="20" textAlign="center">
                    <Text color="#FFBA08" fontWeight="bold" fontSize="48">50</Text>
                    <Text color="#FFBA08" fontWeight="bold" fontSize="48">60</Text>
                    <Text color="#FFBA08" fontWeight="bold" fontSize="48">27</Text>
                    <Text fontWeight="bold" color="gray.600">países</Text>
                    <Text fontWeight="bold" color="gray.600">línguas</Text>
                    <Text fontWeight="bold" color="gray.600">cidades +100</Text>
                </Box>

            </Flex>

            <Box>
                <Text ml="36" fontSize="36px" fontWeight="bold" color="gray.600">
                    Cidades +100
                </Text>

                <Box>
                    
                </Box>
            </Box>
        </>
    );
};