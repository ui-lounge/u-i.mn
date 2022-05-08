import Image from "next/image";
import Head from "next/head";
const Page = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>UI Lounge & Restaurant Menu</title>
        <meta
          property="og:title"
          content="UI Lounge & Restaurant Menu"
          key="ogtitle"
        />
        <meta
          property="og:description"
          content="UI Lounge & Restaurant Menu"
          key="ogdesc"
        />
        <meta property="og:image" content="https://www.u-i.mn/menu/001.png" />
      </Head>
      <main className="mt-12 relative flex flex-col items-center">
        {[...new Array(5)].map((_, index) => {
          let order = index.toString().padStart(3, "0");
          return (
            <div key={index}>
              <Image
                src={`/menu/${order}.png`}
                width="500px"
                height="1088px"
                alt={`Menu Page ${order}`}
              />
            </div>
          );
        })}
      </main>
    </>
  );
};
export default Page;
