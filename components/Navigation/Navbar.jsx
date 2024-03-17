// import { UserButton } from "@clerk/nextjs";
// import { currentUser } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/nutritrack.svg";
import SideMenu from "./SideMenu";
import NavElements from "./NavElements";
// import Hotkey from "../Extras/Hotkey";

// Navbar is not sticky, pulls elements from NavElements and Sidemenu
// Navbar is not client because we need the async await for clerk userButton, do not import the sidemenu or navElements here

const Navbar = async () => {
    // const user = await currentUser();

    return (
        <header className="absolute inset-x-0 top-0 z-5 h-max">
            <nav
                className="flex items-center justify-between p-6 lg:px-8 bg-gray-900"
                aria-label="Global"
            >
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        {/* Your Logo */}
                        {/* <Image className="h-10 w-auto lg:h-11" src={kadianLogo} alt="" /> */}
                        <Image
                            className="h-10 w-auto lg:h-11"
                            src={Logo}
                            alt=""
                        />
                    </Link>
                </div>
                {/* Navbar elements */}
                <NavElements />
                <div className="lg:flex lg:flex-1 lg:justify-end">
                    <div className="flex items-center">
                        {/* Clerk user button based on cookies, Login button */}
                        {/* {!user ? (
                          <Link
                              href="/sign-in"
                              className="text-lg font-semibold leading-6 text-gray-100 mx-4"
                          >
                              Log in
                          </Link>
                      ) : (
                          <UserButton afterSignOutUrl="/" className="" />
                      )} */}
                        <Link
                            href="/sign-in"
                            className="text-lg font-semibold leading-6 text-gray-100 mx-4"
                        >
                            Log in
                        </Link>
                        {/* <Hotkey /> */}
                        {/* Side menu for mobile */}
                        <SideMenu />
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
