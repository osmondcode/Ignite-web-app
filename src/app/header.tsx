import { Logo } from "@/assets/SVG/SVG";
import { AlignRight } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full h-[80px] xs:h-[100px] flex items-center justify-between xs:px-7 px-4 sm:px-10 fixed top-0 z-40  text-white backdrop-blur-md">
      <div className="sm:text-[26px] text-[22px] font-bold flex items-center gap-[15px]">
        <Logo />
        <h1>
          IGNITE
          <span className="text-[var(--light)] text-[40px] ml-1">.</span>
        </h1>
      </div>
      <nav className="hidden lg:flex items-center gap-8 text-[20px] font-medium px-[30px] bg-[var(--dark)] py-4 rounded-[10px]">
        <Link href="#" className="text-[#e7fcb1] font-bold ">
          Home
        </Link>
        <Link href="#" className="hover:text-[#e7fcb1] hover:font-bold">
          About
        </Link>
        <Link href="#" className="hover:text-[#e7fcb1] hover:font-bold">
          Our Solutions
        </Link>
        <Link
          href="#"
          className="hover:text-[#e7fcb1] hover:font-bold hidden xl:flex"
        >
          We Serve
        </Link>
        <Link
          href="#"
          className="hover:text-[#e7fcb1] hover:font-bold"
        >
          Careers
        </Link>
        <Link href="#" className="hover:text-[#e7fcb1] hover:font-bold">
          Blogs
        </Link>
      </nav>
      <button className="bg-[var(--light)] px-6 py-2.5 rounded-[30px] font-bold cursor-pointer btn-border-reveal overflow-hidden hidden lg:flex items-center justify-center">
        Contact Us
          </button>
          
          <button className="bg-transparent cursor-pointer overflow-hidden lg:hidden flex">
              <AlignRight className="xs:w-[35px] w-[30px] xs:h-[35px] h-[30px]"/>
          </button>
    </header>
  );
}
