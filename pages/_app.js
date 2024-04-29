import "./global.css";

import { TrackingProvider } from "@/Context/Tracking";
import { NavBar, Footer } from "../Components"
export default function App({ Component, pageProps}){
    return (
        <>
        <TrackingProvider>
            <NavBar/>
            <Component {...pageProps} />
            <Footer/>
        </TrackingProvider>
        </>
    )
}