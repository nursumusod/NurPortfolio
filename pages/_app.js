import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/Layouts/main.js'
import Fonts from '/components/Layouts/fonts.js'
import theme from '../Lib/theme'
import { AnimatePresence } from 'framer-motion'

const Website = ({Component, pageProps, router}) => {
    return (
        <ChakraProvider theme={theme}>
            <Fonts />
            <Layout router={router}>
            <AnimatePresence exitBeforeEnter initial={true}>
                <Component{...pageProps} key ={router.route} />
            </AnimatePresence>
            </Layout>
        </ChakraProvider>
    )
}

export default Website
