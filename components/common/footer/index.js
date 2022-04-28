import Link from "next/link";
import { FaInstagram, FaFacebook } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="mt-16">
      <div className="py-10 border-t sm:flex justify-between text-slate-500 border-slate-200/5 max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="mb-6 sm:mb-0 sm:flex">
          <p className="text-sm">© {new Date().getFullYear()} UI Lounge</p>
          <div className="sm:ml-4 sm:pl-4 sm:border-l sm:border-slate-200/5 text-xs flex flex-col justify-center items-start">
            <Link
              href="https://maps.google.com/maps/dir/UI+Lounge+%26+Restaurant+Bayanzurkh,+Encanto+Tower+19th+Floor+13312/@47.9033317,106.9295069,18z/data=!4m5!4m4!1m0!1m2!1m1!1s0x5d969345025e10fd:0xf0340fd97ca54a44"
              passHref
            >
              <a target="_blank" rel="noreferrer" className="hover:underline">
                Улаанбаатар БЗД 26-р хороо Encanto Tower A Block 19 давхар
              </a>
            </Link>
            <a href="tel:77883034" className="hover:underline">
              +976 77883034
            </a>
          </div>
        </div>
        <div className="flex space-x-4 text-slate-500 items-center">
          <Link href="https://facebook.com/ui.lounge" passHref>
            <a
              target="_blank"
              rel="noreferrer"
              aria-label="facebook"
              className="hover:text-sky-400 p-1 sm:p-0 block"
            >
              <span className="sr-only">Facebook</span>
              <FaFacebook className="h-6 w-6 sm:h-4 sm:w-4" />
            </a>
          </Link>
          <Link href="https://instagram.com/ui.lounge" passHref>
            <a
              target="_blank"
              rel="noreferrer"
              aria-label="instagram"
              className="hover:text-sky-400 p-1 sm:p-0 block"
            >
              <span className="sr-only">Instagram</span>
              <FaInstagram className="h-6 w-6 sm:h-4 sm:w-4" />
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
