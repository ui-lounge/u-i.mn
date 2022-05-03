import Image from "next/image";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css/bundle";
export async function getStaticProps() {
  const { data } = await axios.get(process.env.NEXT_PUBLIC_API + "/homes");
  const images = data.filter(({ type }) => type === "home");
  return {
    props: {
      images,
    },
  };
}

const Page = ({ images }) => {
  return (
    <div className="home mt-16 sm:mt-0">
      <Swiper
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        spaceBetween={50}
        slidesPerView={1}
        modules={[Pagination, Autoplay]}
        pagination={{
          clickable: true,
        }}
        style={{ height: "80%", position: "relative" }}
        className="aspect-video w-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              src={process.env.NEXT_PUBLIC_API + image.Image.url}
              layout="fill"
              alt={image.Name}
              placeholder="blur"
              objectFit="cover"
              blurDataURL={image.Image.formats.thumbnail.url}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <section className="text-center px-4 max-w-2xl mx-auto my-6 text-white">
        <h1 className="text-lg font-bold uppercase">
          UI лоунж & ресторан тавтай морил
        </h1>
        <p>
          Mанай ресторан нь нийт 180 хүн зэрэг хүлээн авах багтаамжтай
          Улаанбаатарын үдшийг 20 давхраас тольдон харж үдшийг тансаг сайхан
          орчинд өнгөрүүлэх боломжийг бид олгож байна.
        </p>
      </section>
      <div className="grid gap-4 grid-cols-2 max-w-7xl mx-auto px-4">
        <div className="w-full aspect-image relative">
          <Image
            src="/images/food.jpg"
            layout="fill"
            className="rounded"
            alt="Foods"
          />
        </div>
        <div className="w-full aspect-image relative">
          <Image
            src="/images/drinks.jpg"
            layout="fill"
            className="rounded"
            alt="Drinks"
          />
        </div>
        <div className="w-full aspect-image relative">
          <Image
            src="/images/hall.jpg"
            layout="fill"
            className="rounded"
            alt="Hall"
          />
        </div>
        <div className="w-full aspect-image relative">
          <Image
            src="/images/theque.jpg"
            layout="fill"
            className="rounded"
            alt="Theque"
          />
        </div>
      </div>
    </div>
  );
};
export default Page;
