import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";
// import Logo from "@assets/svg/logo.svg";
const Header = () => (
  <header className="sticky top-0 z-40 w-full backdrop-blur border-b border-slate-50/[0.06] bg-slate-900/75">
    <div className="max-w-8xl mx-auto">
      <div className="py-4 lg:px-8 lg:border-0 mx-4 lg:mx-0">
        <div className="flex items-center">
          <Link href="/">
            <a className="text-sm text-white items-center flex">
              {/* <Image src={Logo} height={24} width={24} /> */}
              <span>UI Lounge</span>
            </a>
          </Link>
          <div className="ml-auto flex items-center">
            <nav className="text-sm leading-6 font-semibold text-slate-200 hidden md:flex">
              <ul className="flex space-x-8">
                <li>
                  <Link href="/menu">
                    <a className="hover:text-sky-400">Mэню</a>
                  </Link>
                </li>
                <li>
                  <Link href="/new">
                    <a className="hover:text-sky-400">Mэдээ</a>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <a className="hover:text-sky-400">Холбоо барих</a>
                  </Link>
                </li>
                <li>
                  <Link href="/order">
                    <a className="p-2 rounded-lg border border-sky-400 hover:ring-1 ring-sky-400">
                      Захиалга
                    </a>
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="flex items-center md:border-l ml-6 pl-6 border-slate-800">
              <ul className="flex space-x-5 text-white items-center">
                <li>
                  <Link href="https://facebook.com/ui.lounge" passHref>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      aria-label="facebook"
                      className="hover:text-sky-400 p-1 sm:p-0 block"
                    >
                      <FaFacebook className="h-6 w-6 sm:h-4 sm:w-4" />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="https://instagram.com/ui.lounge" passHref>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      aria-label="instagram"
                      className="hover:text-sky-400 p-1 sm:p-0 block"
                    >
                      <FaInstagram className="h-6 w-6 sm:h-4 sm:w-4" />
                    </a>
                  </Link>
                </li>
                <li>
                  <button className="hover:text-sky-400 block sm:hidden p-1">
                    <HiMenuAlt3 className="w-6 h-6" />
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
);
export default Header;
