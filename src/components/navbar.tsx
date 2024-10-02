import { useEffect, useState } from "react";
import Logo from "../assets/Logo.svg";
import { MobileNavItems, NavItems } from "../data-helper";

export const Navbar = () => {
  const [selectedNavMenu, setSelectedNavMenu] = useState("store");
  const [menuOpen, setMenuOpen] = useState(false);

  const MobileNavMenu = ({ menu, idx }: any) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isExiting, setIsExiting] = useState(false);

    // const handleExit = () => {
    //   setIsExiting(true); // Trigger fade-out animation
    // };

    // useEffect(() => {
    //   if (selectedNavMenu !== menu.value) {
    //     handleExit();
    //   }
    // }, [selectedNavMenu]);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, idx * 100);

      return () => clearTimeout(timer);
    }, [idx]);

    return (
      <li
        onClick={() => setSelectedNavMenu(menu.value)}
        style={{
          color: selectedNavMenu === menu.value ? "#FCC85D" : "#A1A1A1",
          fontWeight: selectedNavMenu === menu.value ? "500" : "400",
        }}
        className={`nav__link ${isVisible ? "fade-in" : ""} ${
          isExiting ? "fade-out" : ""
        } flex font-[400] text-[16px] lg:text-[18px] w-full justify-between leading-[20px] cursor-pointer`}
      >
        {menu.label}
        {menu.icon}
      </li>
    );
  };

  return (
    <div className="bg-[#191919] w-full h-[68px] fixed left-0 top-0 px-8 lg:px-10 flex items-center justify-between z-50">
      <div>
        <a href="/">
          <img src={Logo} />
        </a>
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
              className="font-[400] text-[16px] lg:text-[18px] leading-[20px] cursor-pointer"
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex relative items-center gap-12">
        <div
          onClick={() => setMenuOpen((prev) => !prev)}
          className="cursor-pointer md:pr-0 pr-6 relative md:hidden block"
        >
          <div
            id="icon"
            className={`${menuOpen ? "icon-close" : "icon-menu"}`}
          />
        </div>
        <button className="relative group overflow-hidden px-4 md:flex hidden py-2 font-semibold text-white hover:text-black bg-transparent border border-[#FFFFFF] rounded-md">
          <span className="relative z-10">View Cart</span>
          <div className="absolute inset-0 w-full h-full bg-[#FFFFFF] transition-transform duration-500 transform translate-y-full group-hover:translate-y-0"></div>
        </button>

        <div
          className={`${
            menuOpen ? "flex" : "hidden"
          } absolute top-10 md:top-14 -left-44 md:-left-16 min-w-[220px] md:min-w-[250px] bg-[#191919] w-full md:hidden flex p-6`}
        >
          <ul className="flex lg:gap-8 items-start flex-col gap-6 w-full">
            {MobileNavItems.map((item, indx) => (
              <MobileNavMenu key={indx} menu={item} idx={indx} />
            ))}
            <div className="border border-[#FFFFFF] px-6 py-2 rounded-[8px] md:hidden flex justify-center cursor-pointer w-full">
              <button className="text-[#FFFFFF]">View Cart</button>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};
