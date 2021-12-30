import { Provider } from 'react-redux'
import { store } from '../app/store'
import '../styles/globals.css'
const MyApp = ({ Component, pageProps }) => {
    return (
        // Giving all the app access to next auth login
        <AuthProvider session={pageProps.session}>
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        </AuthProvider>
)
}

import {Provider as AuthProvider} from "next-auth/client"

export default MyApp
