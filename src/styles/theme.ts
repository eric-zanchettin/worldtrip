import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    colors: {
        gray: {
            "600": "#47585B",
        },
    },
    styles: {
        global: {
            body: {
                fontFamily: "Poppins",
                bg: '#f5f8fa',
            },
        },
    },
});