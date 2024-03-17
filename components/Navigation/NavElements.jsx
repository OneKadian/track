"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

//  Don't forget to add the href as an id to the desired section my friend!

const NavElements = () => {
    const pathname = usePathname();
    const router = useRouter();
    const [isNavOpen, setIsNavOpen] = useState(false);

    const closeNav = () => {
        setIsNavOpen(false);
    };

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
        switch (pathname) {
            case "/members":
                return membersNavigation;
            case "/":
                return navigation;
            // ...other cases
            default:
                return navigation;
        }
    }, [pathname, navigation, membersNavigation]);

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
        <div className="hidden lg:flex lg:gap-x-12">
            {memoizedNavigation.map((item) => (
                // <Link
                //     key={item.name}
                //     href={item.href}
                //     className={`menu-item--link flex items-center`}
                //     target={item.target ? item.target : "_self"}
                //     onClick={(e) => handleScroll(e, item.href)}
                // >
                //     {item.name}
                // </Link>

                <li key={item.name} className="header-nav--menu-item">
                    <Link
                        key={item.name}
                        to={item.to}
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
        </div>
    );
};

export default NavElements;
