import Image from "next/image";
const Page = () => {
  return (
    <main className="mt-12 relative flex flex-col items-center">
      {[...new Array(5)].map((_, index) => {
        let order = index.toString().padStart(3, "0");
        return (
          <div>
            <Image src={`/menu/${order}.png`} width="500px" height="1088px" />
          </div>
        );
      })}
    </main>
  );
};
export default Page;
