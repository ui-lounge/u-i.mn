import Head from "next/head";
import Header from "@components/common/header";
import Footer from "@components/common/footer";
const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>UI Lounge &amp; Restaurant</title>
      </Head>
      <Header />
      <main className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8 min-h-screen">
        {children}
      </main>
      <Footer />
    </>
  );
};
export default Layout;
