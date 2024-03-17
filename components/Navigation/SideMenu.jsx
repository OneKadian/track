"use client";

import { useState, useMemo } from "react";
import { Dialog } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";
// import Logo from "../../Images/logo.png";
import Logo from "../../public/nutritrack.svg";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

//  Don't forget to add the href as an id to the desired section my friend!
// Menu for mobile, not visible on PC

const SideMenu = () => {
    const pathname = usePathname();

    const navigation = [
        { name: "Pricing", href: "#pricing-section2" },
        { name: "Stack", href: "#stack-section" },
        { name: "Members", href: "/members" },
        { name: "FAQ", href: "#faq-section" }
    ];

    const membersNavigation = [
        { name: "Home", href: "/" },
        {
            name: "Billing",
            href: "https://billing.stripe.com/p/login/test_3csaG2csp7sj8wwbII"
        }
    ];

    const memoizedNavigation = useMemo(() => {
        return pathname === "/members" ? membersNavigation : navigation;
    }, [pathname, navigation, membersNavigation]); // Recompute only if relevant values change

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleScroll = (e, href) => {
        if (href.startsWith("#")) {
            e.preventDefault();
            const targetElement = document.getElementById(href.substring(1));
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        } else {
            // Redirect to external links or routes
            const router = useRouter();
            router.push(href, { scroll: false });
        }
    };

    return (
        <header className="">
            <div className="flex lg:hidden">
                <button
                    type="button"
                    className={`${
                        mobileMenuOpen ? "hidden" : ""
                    } lg:hidden m-2.5 inline-flex items-center justify-center rounded-md text-gray-100`}
                    onClick={() => setMobileMenuOpen(true)}
                >
                    <span className="sr-only">Open main menu</span>
                    <Bars3Icon className="h-8 w-8" aria-hidden="true" />
                </button>
            </div>
            <Dialog
                as="div"
                className="lg:hidden "
                open={mobileMenuOpen}
                onClose={setMobileMenuOpen}
            >
                <div className="fixed inset-0 z-50" />
                <Dialog.Panel className="fixed inset-y-0 border-l border-gray-800 right-0 z-50 w-3/5 overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <Image
                                className="hidden h-12 w-auto"
                                src={Logo}
                                alt=""
                            />
                        </Link>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-100"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-8 w-8" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10 ">
                            <div className="space-y-2 py-6 ">
                                {memoizedNavigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        onClick={(e) =>
                                            handleScroll(e, item.href)
                                        }
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-100 hover:text-white"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    );
};

export default SideMenu;
