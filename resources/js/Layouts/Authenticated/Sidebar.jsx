import React from "react";
import SubscriptionDetail from "./SubscriptionDetail";
import MenuItem from "./MenuItem.jsx";
import { UserMenu, UserOthers } from "./MenuList.jsx";

export default function Sidebar({ auth }) {
    return (
        <aside className="fixed z-50 w-[300px] h-full">
            <div className="flex flex-col p-[30px] pr-0 border-r border-gray-[#F1F1F1] overflow-y-auto h-full">
                <a href="/">
                    <img src="/images/nephlix.svg" alt="" />
                </a>
                <div className="links flex flex-col mt-[60px] h-full gap-[50px]">
                    <div>
                        <div className="text-gray-1 text-sm mb-4">Menu</div>
                        {UserMenu.map((item, index) => (
                            <MenuItem
                                key={index}
                                link={item.link}
                                icon={item.icon}
                                text={item.text}
                                isActive={
                                    item.link && route().current(item.link)
                                }
                            />
                        ))}
                    </div>

                    <div>
                        <div className="text-gray-1 side-link mb-4">Others</div>
                        {UserOthers.map((item, index) => (
                            <MenuItem
                                key={index}
                                link={item.link}
                                icon={item.icon}
                                text={item.text}
                                isActive={
                                    item.link && route().current(item.link)
                                }
                                method={item.method}
                            />
                        ))}
                    </div>

                    {auth.activePlan && (
                        <SubscriptionDetail
                            isPremium={auth.activePlan.name === "Premium"}
                            name={auth.activePlan.name}
                            remainingActiveDays={
                                auth.activePlan.remainingActiveDays
                            }
                            activeDays={auth.activePlan.activeDays}
                        />
                    )}
                </div>
            </div>
        </aside>
    );
}
