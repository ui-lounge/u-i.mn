import Link from "next/link";
import { FaInstagram, FaFacebook } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="mt-16">
      <div className="py-10 border-t sm:flex justify-between text-slate-500 border-slate-200/5 max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="mb-6 sm:mb-0 sm:flex">
          <p>© {new Date().getFullYear()} АБЕ ЭНД АА ХХК</p>
          <div className="sm:ml-4 sm:pl-4 sm:border-l sm:border-slate-200/5 text-xs flex items-center">
            <Link href="/">
              <a target="_blank" rel="noreferrer" aria-label="facebook">
                Улаанбаатар БЗД 26-р хороо Encanto Tower A Block 19 давхар
              </a>
            </Link>
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
