import { Flex, Box, Text, VStack, Image, HStack, } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Header } from "../../components/Header";

import continentsInfo from "../../data/continents-info.json";

export default function Continents() {
    const router = useRouter();
    let { continent } = router.query;
    continent = String(continent);

    return (
        <>
            <Header />

            {continentsInfo[continent] ?
                <>
                    <Box backgroundImage={`/page-banners/${continent}-page.png`} backgroundSize="cover" backgroundPosition="center">
                        <Text
                            fontSize="48px"
                            fontWeight="bold"
                            color="#FFF"
                            p="340px 0 80px 140px"
                            textShadow="2px 2px 6px black"
                        >
                            {continentsInfo[continent].Name}
                        </Text>

                    </Box>

                    <Flex mt="12" ml="36" mr="36" mb="16" justify="space-between" align="center">
                        <Box fontSize="18" textAlign="justify" w={400}>
                            {continentsInfo[continent].Description}
                        </Box>

                        <Box display="grid" gridTemplateColumns="1fr 1fr 1fr" columnGap="20" textAlign="center">
                            {continentsInfo[continent].Data.map(value => {
                                return (
                                    <Text key={value} color="#FFBA08" fontWeight="bold" fontSize="48">{value}</Text>
                                );
                            })}
                            <Text fontWeight="bold" color="gray.600">países</Text>
                            <Text fontWeight="bold" color="gray.600">línguas</Text>
                            <Text fontWeight="bold" color="gray.600">cidades +100</Text>
                        </Box>

                    </Flex>

                    <Box mb="20">
                        <Text ml="36" mb="4" fontSize="36px" fontWeight="bold" color="gray.600">
                            Cidades +100
                        </Text>

                        <HStack pl="9rem" gap="20">
                            {continentsInfo[continent].Cities.map(city => {
                                return (
                                    <VStack borderRadius="0.5rem" boxShadow="5px 5px 20px black">
                                        <Image src={`/cities/${city.Image}.png`} />
                                        <Box display="flex" gap="6rem" align="center">
                                            <Box fontSize="10pt">
                                                <Text>{city.Name}</Text>
                                                <Text color="gray">{city.Country}</Text>
                                            </Box>
                                            <Box borderRadius="50rem">
                                                <Image src={`/cities/country-flags/${city.Flag}.png`} />
                                            </Box>
                                        </Box>
                                    </VStack>
                                );
                            })}
                        </HStack>
                    </Box>
                </>
                :
                <Box>
                    <Text fontSize="24px" fontWeight="bold" color="red.500">
                        O continente selecionado não existe ou não possui informações no momento.
                        Tente novamente mais tarde!
                    </Text>
                </Box>
            }
        </>
    );
};