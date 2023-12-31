import { NavLinks } from "@/constants";
import { getCurrentUser } from "@/lib/session";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import AuthProviders from "./AuthProviders";
import ProfileMenu from "./ProfileMenu";

const Navbar = async () => {
  const session = await getCurrentUser(); //login session
  console.log(`session:${session}`);
  return (
    <nav className="flexBetween navbar">
      <div className="flex-1 flexStart gap-10">
        <Link href="/">
          <Image src="/logo.svg" width={115} height={43} alt="Flexible" />
        </Link>
        <ul className="hidden text-small gap-7 xl:flex">
          {NavLinks.map((link) => (
            <Link href={link.href} key={link.key}>
              {link.text}
            </Link>
          ))}
        </ul>
      </div>
      <div className="flexCenter gap-4">
        {session?.user ? (
          <>
            <ProfileMenu session={session} />

            <Link href="/create-project">Share Work</Link>
          </>
        ) : (
          <div>
            <AuthProviders />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
