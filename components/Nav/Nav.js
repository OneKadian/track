import { useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";

const navigation = [
    { name: "Features", to: "#features", href: "/#features" },
    { name: "Testimonials", to: "#testimonials", href: "/#testimonials" },
    { name: "FAQ?", to: "#faq", href: "/#faq" },
    {
        name: "Login",
        href: "https://chrstnl.com/",
        isArrow: true,
        target: "_blank"
    }
];

export const Nav = () => {
    const router = useRouter();
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [user, setUser] = useState(true);

    const closeNav = () => {
        setIsNavOpen(false);
    };
    return (
        <nav className="header-nav">
            <div className="header-nav--container">
                {/* Burger menu icon */}
                <button
                    onClick={() => setIsNavOpen(!isNavOpen)}
                    data-collapse-toggle="navbar-default"
                    type="button"
                    className="mobile-menu"
                    aria-controls="navbar-dropdown"
                    aria-expanded="false"
                >
                    <span className="sr-only">Open main menu</span>
                    <Icon
                        icon="material-symbols:menu-rounded"
                        className="h-6 w-auto text-black"
                    />
                </button>
                {/* Sidebar */}
                <div
                    className={`header-nav--menu-container z-20 ${
                        isNavOpen ? "show" : "hide"
                    }`}
                    id="navbar-default"
                >
                    <ul className="header-nav--menu">
                        {navigation.map((item) => (
                            <li
                                key={item.name}
                                className={
                                    item.isArrow
                                        ? `inline-flex cursor-pointer ${
                                              user ? "block" : "hidden"
                                          } gap-3 rounded-lg font-semibold justify-center lg:hidden md:hidden text-black transition-colors duration-300 bg-secondary-500 w-[30%]`
                                        : "header-nav--menu-item"
                                }
                            >
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`menu-item--link flex items-center
                                ${router.pathname === item.href ? "active" : ""}
                              `}
                                    onClick={closeNav}
                                    target={item.target ? item.target : "_self"}
                                >
                                    {item.name}
                                    {item.isArrow && (
                                        <span className="ml-2 inline-block text-sm font-medium text-inherit">
                                            <Icon
                                                icon="material-symbols:arrow-outward"
                                                className="h-6 w-auto"
                                            />
                                        </span>
                                    )}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};
