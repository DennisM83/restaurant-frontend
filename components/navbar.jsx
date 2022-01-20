import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="shadow-sm py-4">
      <div>
          <Link href="/">
            <a className="px-10 font-bold text-2xl">Home</a>
          </Link>
      </div>
    </nav>
  );
}
