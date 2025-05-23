import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({ children }) {
  return (
    <div className="h-screen flex">
      {/* LEFT Side */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4">
        <Link
          href="/"
          className="flex items-center justify-center lg:justify-start"
        >
          <Image src="/logo2.png" alt="logo" width={50} height={50}></Image>
          <span className="hidden lg:block font-bold text-lg pt-1 uppercase">One School</span>
        </Link>
        <Menu></Menu>
      </div>
      {/* RIGHT Side */}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll flex flex-col">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
