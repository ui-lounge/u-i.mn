const Page = () => {
  return (
    <div className="flex items-center flex-col my-12 px-4">
      <div className="my-12">
        <h1 className="text-sm sm:text-lg font-bold uppercase">Mанай хаяг</h1>
        <span>Улаанбаатар БЗД 26-р хороо Encanto Tower A Block 19 давхар</span>
        <a href="tel:77883034" className="text-white ml-2">
          +976 77883034
        </a>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1187.1534443210014!2d106.92955660970844!3d47.90362595934896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d969345025e10fd%3A0xf0340fd97ca54a44!2sUI%20Lounge%20%26%20Restaurant!5e1!3m2!1sen!2smn!4v1651054565289!5m2!1sen!2smn"
        height="600"
        className="border-none rounded w-full sm:w-800"
        allowFullScreen
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};
export default Page;
