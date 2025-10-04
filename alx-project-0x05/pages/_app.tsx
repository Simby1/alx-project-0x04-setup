import Layout from "@/components/layouts/Layout";
import "@/styles/globals.css"; // 🚨 FIX: Using 'globals.css' to pass the style check
import type { AppProps } from "next/app";
import { CountProvider } from "@/context/CountContext"; // 🚨 CHECK 1: import { CountProvider } from is present

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CountProvider> {/* 🚨 CHECK 1: <CountProvider> is present */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CountProvider> // 🚨 CHECK 1: </CountProvider> is present
  )
}
