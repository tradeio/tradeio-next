import { useRouter } from "next/router";
import { useEffect } from "react";
import NProgress from "nprogress";
import Layout from "../components/layouts/Layout";

import "../styles/globals.css";
import "../styles/nprogress.css";

function App({ Component, pageProps }) {
  const { events } = useRouter();

  useEffect(() => {
    events.on("routeChangeStart", () => NProgress.start());
    events.on("routeChangeComplete", () => NProgress.done());
    events.on("routeChangeError", () => NProgress.done());
  }, []);

  const {
    metaData = {
      title: "trade.io",
      keywords: "",
      description: "trade.io",
      type: "website",
      siteName: "trade.io",
      url: "https://trade.io/",
      locale: "en",
    },
    hasLayout = true,
  } = pageProps;

  return (
    <>
      {hasLayout && (
        <main>
          <Layout
            metaData={{
              ...metaData,
            }}
          >
            <Component {...pageProps} />
          </Layout>
        </main>
      )}
      {!hasLayout && <Component {...pageProps} />}
    </>
  );
}

export default App;
