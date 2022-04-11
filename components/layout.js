import Head from "next/head";
import Header from "@components/common/header";
const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>UI Lounge &amp; Restaurant</title>
      </Head>
      <Header />
      <main className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8">{children}</main>
    </>
  );
};
export default Layout;
