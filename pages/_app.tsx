import 'react-toastify/dist/ReactToastify.css'
import 'styles/globals.scss'

import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'

import MainLayout from 'layouts/Main'
import Head from 'next/head'
import { LayoutProvider } from 'providers/LayoutProvider'

const MyApp = ({ Component, pageProps }: AppProps) => {
    return <>
        <Head>
            <title>Job Board</title>
        </Head>

        <LayoutProvider>
            <MainLayout>
                <Component {...pageProps} />
                <ToastContainer
                    position="bottom-center"
                    autoClose={5000}
                    hideProgressBar={true}
                    newestOnTop={true}
                    closeOnClick
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                ></ToastContainer>
            </MainLayout>
        </LayoutProvider>
    </>
}

export default MyApp
