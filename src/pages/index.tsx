import { Center, Flex, Image, Text, Box, HStack, Divider } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, } from 'swiper';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Header } from '../components/Header';
import { SlideContent } from '../components/SlideContent';


export default function Home() {
  return (
    <>
      <Header />

      <Flex backgroundImage="Background.png" h={315} justify="space-between" backgroundSize="100%">
        <Box mt="12" ml="24" textAlign="left">
          <Text color="#FFF" fontSize="36" fontFamily="Poppins">5 Continentes,<br />infinitas possibilidades.</Text>
          <Text mt="4" color="#FFF">Chegou a hora de tirar do papel a viagem que você<br />sempre sonhou. </Text>
        </Box>
        <Image mr="24" src="/assets/Airplane.svg" alt="Ilustração de Avião" />
      </Flex>


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

      <Box>
        <Center>
          <Divider mt="12" mb="12" borderColor="gray.600" border="2px" w={24} />
        </Center>

        <Center textAlign="center">
          <Text fontSize="32" color="gray.600">Vamos nessa?<br />Então escolha seu continente</Text>
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
