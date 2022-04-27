import { useMediaQuery, Center, Flex, Image, Text, Box, HStack, Divider, Grid, GridItem } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, } from 'swiper';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Header } from '../components/Header';
import { SlideContent } from '../components/SlideContent';

export default function Home() {
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)')

  return (
    <>
      <Header />

      <Flex backgroundImage="Background.png" h={[220, 315]} justify="space-between" backgroundRepeat="no-repeat" backgroundSize="cover">
        <Box mt={["6", "12"]} ml={["4", "6", "6", "24"]} textAlign="left">
          <Text color="#FFF" fontSize={["24", "36"]} fontFamily="Poppins" w={[300, "auto"]}>5 Continentes,<br />infinitas possibilidades.</Text>
          <Text mt="4" color="#FFF" w={[380, 420]}>Chegou a hora de tirar do papel a viagem que você sempre sonhou. </Text>
        </Box>
        <Image mr="24" src="/assets/Airplane.svg" alt="Ilustração de Avião" display={["none", "none", "none", "initial"]} />
      </Flex>

      {isLargerThan768
        ?
        <HStack mt="16" spacing="24" justify="center">
          <Box textAlign="center">
            <Image src="/assets/cocktail 1.svg" alt="Ilustração de Coquetel" />
            <Text fontWeight="bolder" mt="6" color="gray.600">vida noturna</Text>
          </Box>
          <Box textAlign="center">
            <Image src="/assets/surf 1.svg" alt="Ilustração de Prancha de Surfe" />
            <Text fontWeight="bolder" mt="6" color="gray.600">praia</Text>
          </Box>
          <Box textAlign="center">
            <Image src="/assets/building 1.svg" alt="Ilustração de Arranha-Céu" />
            <Text fontWeight="bolder" mt="6" color="gray.600">moderno</Text>
          </Box>
          <Box textAlign="center">
            <Image src="/assets/museum 1.svg" alt="Ilustração de Museu" />
            <Text fontWeight="bolder" mt="6" color="gray.600">clássico</Text>
          </Box>
          <Box textAlign="center">
            <Image src="/assets/earth 1.svg" alt="Ilustração de Planeta Terra" />
            <Text fontWeight="bolder" mt="6" color="gray.600">e mais...</Text>
          </Box>
        </HStack>
        :
        <>
          <Grid templateColumns="1fr 1fr" justify="center" width="80%" margin="50px auto 0 auto">
            <GridItem display="flex" alignItems="center" justifyContent="center" gap="2">
              <Image src="/assets/ellipse.svg" alt="Ilustração de Coquetel" />
              <Text fontWeight="bolder" color="gray.600">vida noturna</Text>
            </GridItem>
            <GridItem display="flex" alignItems="center" justifyContent="center" gap="2">
              <Image src="/assets/ellipse.svg" alt="Ilustração de Prancha de Surfe" />
              <Text fontWeight="bolder" color="gray.600">praia</Text>
            </GridItem>
            <GridItem display="flex" alignItems="center" justifyContent="center" gap="2">
              <Image src="/assets/ellipse.svg" alt="Ilustração de Arranha-Céu" />
              <Text fontWeight="bolder" color="gray.600">moderno</Text>
            </GridItem>
            <GridItem display="flex" alignItems="center" justifyContent="center" gap="2">
              <Image src="/assets/ellipse.svg" alt="Ilustração de Museu" />
              <Text fontWeight="bolder" color="gray.600">clássico</Text>
            </GridItem>
          </Grid>
          <Box display="flex" alignItems="center" justifyContent="center" gap="2" ml="">
            <Image src="/assets/ellipse.svg" alt="Ilustração de Planeta Terra" />
            <Text fontWeight="bolder" color="gray.600">e mais...</Text>
          </Box>
        </>
      }

      <Box>
        <Center>
          <Divider mt="12" mb="12" borderColor="gray.600" border="2px" w={24} />
        </Center>

        <Center textAlign="center">
          <Text fontSize={["26", "32"]} fontWeight={["bolder", "regular"]} color="gray.600">Vamos nessa?<br />Então escolha seu continente</Text>
        </Center>
      </Box>

      <Center mt="12" mb="12">
        <Swiper
          spaceBetween={50}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          navigation={true}
          pagination={true}
          modules={[Navigation, Pagination]}
        >
          <SwiperSlide>
            <SlideContent href="europe" title="Europa" description="O continente mais antigo" />
          </SwiperSlide>
          <SwiperSlide>
            <SlideContent href="south-america" title="América do Sul" description="O continente mais tropical" />
          </SwiperSlide>
          <SwiperSlide>
            <SlideContent href="asia" title="Ásia" description="O continente mais cultural" />
          </SwiperSlide>
          <SwiperSlide>
            <SlideContent href="north-america" title="América do Norte" description="O continente mais movimentado" />
          </SwiperSlide>
          <SwiperSlide>
            <SlideContent href="africa" title="África" description="O continente mais quente" />
          </SwiperSlide>
          <SwiperSlide>
            <SlideContent href="oceania" title="Oceania" description="O continente mais exótico" />
          </SwiperSlide>
        </Swiper>
      </Center>
    </>
  );
}
