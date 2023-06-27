import { NavLinks } from "@/constants"
import { getCurrentUser } from "@/lib/session";
import Image from "next/image"
import Link from "next/link"
import AuthProviders from "./AuthProviders";

const Navbar = async () => {
    const session = await getCurrentUser();//login session
    console.log(session)
    return (
        <nav className="flexBetween navbar">
            <div className="flex-1 flexStart gap-10">
                <Link href="/">
                    <Image src="/logo.svg" width={115} height={43} alt="Flexible" />
                </Link>
                <ul className="hidden text-small gap-7 xl:flex">
                    {
                        NavLinks.map((link) => (
                            <Link href={link.href} key={link.key}>
                                {link.text}
                            </Link>
                        ))
                    }
                </ul>
            </div>
            <div className="flexCenter gap-4">
                {
                    session?.user ? (
                        <>
                            UserPhoto

                            <Link href="/create-project">
                                Share Work
                            </Link>
                        </>
                    ) : (
                        <div>
                            Sign In
                            <AuthProviders/>
                        </div>
                    )
                }
            </div>
        </nav>
    )
}

export default Navbar
