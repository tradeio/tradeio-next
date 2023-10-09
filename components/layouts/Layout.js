import Head from "next/head";
import styled from "styled-components";

const LayoutWrapper = styled.div``;

const Layout = ({ metaData, children }) => {
  return (
    <>
      <Head>
        <title>{metaData.title}</title>
        <link rel="canonical" href={metaData.url} />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <LayoutWrapper>{children}</LayoutWrapper>
    </>
  );
};

export default Layout;
