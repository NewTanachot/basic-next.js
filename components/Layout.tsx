import { AppProps } from "next/app";
import Footer from "./Footer";
import Navbar from "./Nav";
import { ReactNode } from 'react'

type LayoutProps = {
    children: ReactNode
    pageProps: any // Or, define a type for pageProps
  }

export default function Layout({ children, pageProps }: LayoutProps) {
    return (
        <>
            <Navbar></Navbar>
                <div className="container">{children}</div>
            <Footer></Footer>
        </>
    );
}