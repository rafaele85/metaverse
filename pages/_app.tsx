import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MoralisProvider} from "react-moralis";

function MyApp({ Component, pageProps }: AppProps) {
    const appId = process.env.NEXT_PUBLIC_APP_ID || ''
    const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL || ''
    return (
        <MoralisProvider
            appId={appId}
            serverUrl={serverUrl}
        >
            <Component {...pageProps} />
        </MoralisProvider>
    )

}

export default MyApp
