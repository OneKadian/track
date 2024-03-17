"use client";
import Switch from "@mui/material/Switch";
import { useState } from "react";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import CustomLink from "./CustomLink";

const ToggleTable2 = ({ userd }) => {
    const [isYearly, setIsYearly] = useState(false);
    const toggleBilling = () => {
        setIsYearly((prevIsYearly) => !prevIsYearly);
    };

    // Change the priceType and then add that as stripe-priceType-session into the api with the price id
    const prices = [
        {
            title: "Current",
            per: "/month",
            prices: [
                {
                    price: "0",
                    priceType: "zeroMonthly"
                },
                {
                    price: "0",
                    priceType: "zeroAnnual"
                }
            ],
            description:
                "Your current situation where the idea is nowhere near Launch",
            features: [
                {
                    text: "Creating from scratch",
                    Icon: <CloseIcon className="text-red-600" />
                },
                {
                    text: "Unorganized flow of work",
                    Icon: <CloseIcon className="text-red-600" />
                },
                {
                    text: "Searching for resources",
                    Icon: <CloseIcon className="text-red-600" />
                },
                {
                    text: "Launch: Delayed",
                    Icon: <CloseIcon className="text-red-600" />
                },
                {
                    text: "Targets: Missed",
                    Icon: <CloseIcon className="text-red-600" />
                }
            ],
            id: "noPlan",
            buttonDisplay: "",
            buttonText: "LAUNCH"
        },
        {
            title: "Innovator",
            per: "/month",
            prices: [
                {
                    price: "25",
                    // priceType: "BasicMonthly",
                    priceType: "monthly"
                },
                {
                    price: "240",
                    // priceType: "BasicAnnual",
                    priceType: "annual"
                }
            ],
            description:
                "Take off with us and build your SaaS venture at warp speed",
            features: [
                {
                    text: "Boiler Plate with instructions",
                    Icon: <DoneIcon className="text-green-400" />
                },
                {
                    text: "Organized flow with roadmaps",
                    Icon: <DoneIcon className="text-green-400" />
                },
                {
                    text: "Resource sheet included",
                    Icon: <DoneIcon className="text-green-400" />
                },
                {
                    text: "Launch: Instant",
                    Icon: <DoneIcon className="text-green-400" />
                },
                {
                    text: "Updates: Unavailable",
                    Icon: <CloseIcon className="text-red-600" />
                }
            ],
            id: "monthly",
            buttonDisplay: "",
            buttonText: "LAUNCH"
        },
        {
            title: "Pioneer",
            per: "/month",
            prices: [
                {
                    price: "50",
                    // priceType: "AdvanceMonthly",
                    priceType: "monthly"
                },
                {
                    price: "480",
                    // priceType: "AdvanceAnnual",
                    priceType: "annual"
                }
            ],
            description:
                "If you're in it for the long haul, this plan is tailor-made for you.",
            features: [
                {
                    text: "Boiler Plate with instructions",
                    Icon: <DoneIcon className="text-green-400" />
                },
                {
                    text: "Organized flow with roadmaps",
                    Icon: <DoneIcon className="text-green-400" />
                },
                {
                    text: "Resource sheet included",
                    Icon: <DoneIcon className="text-green-400" />
                },
                {
                    text: "Launch: Instant",
                    Icon: <DoneIcon className="text-green-400" />
                },
                {
                    text: "Updates: Available",
                    Icon: <DoneIcon className="text-green-400" />
                }
            ],
            id: "annual",
            buttonDisplay: "",
            buttonText: "LAUNCH",
            link: "https://buy.stripe.com/test_4gw5kQ9H91Ob4GQ9AD"
        }
    ];

    return (
        <>
            <label class="inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer" />
                <span class="m-3 text-sm font-medium text-gray-300">
                    Monthly Billing
                </span>
                <Switch
                    className="text-white"
                    checked={isYearly}
                    onChange={toggleBilling}
                    sx={{
                        "& .MuiSwitch-track": {
                            backgroundColor: "#CBD5E0" // Change track color to gray-300
                        }
                    }}
                />
                <span class="m-3 text-sm font-medium text-gray-300">
                    Annual Billing
                </span>
            </label>
            <div className="flex justify-center items-center">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-4/5">
                    {prices.map((price, index) => (
                        <div
                            id={price.id}
                            key={index}
                            className="bg-gray-800 border border-gray-700 flex flex-col p-6 text-center rounded-xl min-h-[500px] justify-center"
                        >
                            <h3 className="text-3xl text-white font-medium">
                                {price.title}
                            </h3>
                            <div className="flex flex-col items-center justify-center min-h-[100px] space-y-4 bg-opacity-70 p-6 bg-gray-800">
                                <div className="flex flex-row">
                                    <div className="flex items-end">
                                        <div className="flex text-left text-[42px] font-semibold leading-6">
                                            {isYearly &&
                                            price.prices[0].price > 0 ? (
                                                <>
                                                    <span className="mr-2 text-gray-300 line-through">
                                                        ${price.prices[0].price}
                                                    </span>
                                                    <span>
                                                        $
                                                        {price.prices[1].price /
                                                            12}
                                                    </span>
                                                </>
                                            ) : (
                                                `$${price.prices[0].price}`
                                            )}
                                        </div>
                                        <div className="-mb-1 ml-1 text-left text-sm font-medium">
                                            <div>/month</div>
                                        </div>
                                    </div>
                                </div>
                                {price.prices[0].price > 0 ? (
                                    <div className="text-left text-sm text-gray-300">
                                        {isYearly
                                            ? `$${price.prices[1].price} will be charged when annual`
                                            : "when charged monthly"}
                                    </div>
                                ) : null}
                            </div>
                            <ul className="mb-8 space-y-4 text-left mx-auto">
                                {price.features.map((feature, featureIndex) => (
                                    <li
                                        key={featureIndex}
                                        className="flex items-center space-x-3 text-gray-300"
                                    >
                                        {feature.Icon}{" "}
                                        {/* Use the predefined icon */}
                                        <span>{feature.text}</span>
                                    </li>
                                ))}
                            </ul>
                            <CustomLink
                                locationID={price.id}
                                modelType={
                                    isYearly
                                        ? price.prices[1].priceType
                                        : price.prices[0].priceType
                                }
                                user={userd}
                                display={price.buttonText}
                                className={`text-white bg-primary-700 ${price.buttonDisplay} font-medium rounded-lg w-fit mx-auto text-sm px-20 py-3 text-center`}
                                // Elongated button design:
                                // className={`text-white bg-primary-600 ${option.buttonDisplay} font-medium rounded-lg text-sm px-5 py-2.5 text-center`}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default ToggleTable2;
