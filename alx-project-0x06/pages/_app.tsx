import Layout from "@/components/layouts/Layout";
import "@/styles/global.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux"; // Import Redux Provider
import store from "@/store/store"; // Import the configured store

export default function App({ Component, pageProps }: AppProps) {
  return (
    // Wrap the entire application with the Redux Provider
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}
