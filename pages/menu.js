import Head from "next/head";
import axios from "axios";
import Image from "next/image";
export async function getServerSideProps() {
  try {
    const { data: menus } = await axios.get(
      process.env.NEXT_PUBLIC_API + "/menus?_limit=500"
    );
    const { data: categories } = await axios.get(
      process.env.NEXT_PUBLIC_API + "/categories"
    );
    let data = [];
    categories.map((item) =>
      data.push({
        ...item,
        items:
          menus
            .filter(({ category }) => category._id === item._id)
            .sort((a, b) => a.name.localeCompare(b.name)) || false,
      })
    );
    data = data.sort((a, b) => a.number - b.number);
    return {
      props: { data },
    };
  } catch (error) {
    console.log(error);
    return {
      props: { data: [] },
    };
  }
}

const Page = ({ data }) => {
  const Format = (amount) =>
    new Intl.NumberFormat().format(parseInt(amount)) + " " + "₮";
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
      <main className="mt-20 mx-auto max-w-menu space-y-4 sm:p-0 px-2">
        {data.map((category, index) => (
          <section className="bg-menu p-4 rounded relative pb-8" key={index}>
            <div className="absolute flex right-0 left-0 bottom-2 justify-center">
              <Image
                src="/logo_black.png"
                alt="Menu Logo"
                width="55px"
                height="55px"
                className="bg-white"
              />
            </div>
            <div className="border p-4 space-y-4 rounded min-h-menu">
              <h5 className="text-black uppercase text-xl font-bold">
                {category.name}
              </h5>
              {category.items.map((item, index) => (
                <div className="space-y-2" key={index}>
                  <div
                    className={`text-sm text-black grid ${
                      item.shot ? "grid-cols-5" : "grid-cols-4"
                    }`}
                  >
                    {/* <span className="font-bold col-span-3">
                      {item.number}. {item.name}
                    </span> */}
                    <span className="font-bold col-span-3">{item.name}</span>
                    <div
                      className={`${
                        item.shot ? "col-span-2" : "col-span-1"
                      } font-bold ml-auto text-right`}
                    >
                      <p>{Format(item.price)}</p>
                      {item.shot && item.shot > 0 && (
                        <div className="flex flex-row items-center">
                          <span className="text-gray-500 text-xs mr-2 font-normal">
                            {item.shot_label}
                          </span>
                          <span>{Format(item.shot)}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <p className="text-xs text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>
    </>
  );
};
export default Page;
