import NavLinks from "./nav-links";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-slate-400 h-[10vh] flex justify-between items-center px-8">
      <Link href='/' className="uppercase font-bold text-xl text-white">Home</Link>
      <nav className="flex">
        <NavLinks />
      </nav>
    </header>
  );
}
