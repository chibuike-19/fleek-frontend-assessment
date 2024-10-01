import { useState } from "react";
import Logo from "../assets/Logo.svg";
import { MobileNavItems, NavItems } from "../data-helper";

export const Navbar = () => {
    const [selectedNavMenu, setSelectedNavMenu] = useState("store")
    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-[#191919] w-full h-[68px] fixed left-0 top-0 px-8 lg:px-10 flex items-center justify-between z-50">
      <div>
        <img src={Logo} />
      </div>
      <div className="md:flex hidden">
        <ul className="flex lg:gap-8 gap-6">
          {NavItems.map((item, indx) => (
            <li
              key={indx}
              onClick={() => setSelectedNavMenu(item.value)}
              style={{
                color: selectedNavMenu === item.value ? "#FCC85D" : "#A1A1A1",
                fontWeight: selectedNavMenu === item.value ? "500" : "400",
              }}
              className="font-[400] text-[16px] lg:text-[18px] leading-[20px]"
            >
              <a href={item.link}>{item.label}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex relative items-center gap-12">
        <div
          onClick={() => setMenuOpen((prev) => !prev)}
          className="cursor-pointer sm:pr-0 pr-6 relative md:hidden block"
        >
          <div
            id="icon"
            className={`${menuOpen ? "icon-close" : "icon-menu"}`}
          />
        </div>
        <div className="border border-[#FFFFFF] px-6 py-2 rounded-[8px] sm:flex hidden">
          <button className="text-[#FFFFFF]">View Cart</button>
        </div>
        <div
          className={`${
            menuOpen ? "flex" : "hidden"
          } absolute top-10 sm:top-14 -left-44 sm:-left-16 min-w-[220px] sm:min-w-[250px] bg-[#191919] w-full md:hidden flex p-6`}
        >
          <ul className="flex lg:gap-8 items-start flex-col gap-6 w-full">
            {MobileNavItems.map((item, indx) => (
              <li
                key={indx}
                onClick={() => setSelectedNavMenu(item.value)}
                style={{
                  color: selectedNavMenu === item.value ? "#FCC85D" : "#A1A1A1",
                  fontWeight: selectedNavMenu === item.value ? "500" : "400",
                }}
                className="flex font-[400] text-[16px] lg:text-[18px] w-full justify-between leading-[20px]"
              >
                <a href={item.link}>{item.label}</a>
                {item.icon}
              </li>
            ))}
            <div className="border border-[#FFFFFF] px-6 py-2 rounded-[8px] sm:hidden flex justify-center w-full">
              <button className="text-[#FFFFFF]">View Cart</button>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};
