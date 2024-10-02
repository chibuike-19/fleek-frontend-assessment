import { IProductCardProps } from "../data-helper";
import { truncateText } from "../utils/textTruncate";

export const ProductCard = ({ props, view }: { props: IProductCardProps, view: "grid" | "list" }) => {

  return view === "grid" ? (
    <div className="h-[350px] border border-[#363636] rounded-[12px] overflow-hidden bg-[#191919] max-w-[450px] md:max-w-[300px] ">
      <div className="h-[40%]">
        <img src={props.img} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="h-[60%] py-4 px-4">
        <p className="text-[#FFFFFF] font-[400] text-[16px]">${props.price}</p>
        <h4 className="text-[#FFFFFF] mt-2 font-[500] text-[18px]">
          {props.title}
        </h4>
        <p className="text-[#A1A1A1] mb-2 font-[400] text-[12px] leading-[16px]">
          {props.desc}
        </p>
        {props.tags.map((tag) => (
          <button className="bg-[#222222] text-[12px] text-[#FFFFFF] rounded-[360px] p-1">
            {tag}
          </button>
        ))}
        <button className="relative w-full mt-2 group overflow-hidden px-4 py-2 font-semibold text-white hover:text-black bg-transparent border border-[#FFFFFF] rounded-md">
          <span className="relative z-[10]">View Cart</span>
          <div className="absolute inset-0 w-full h-full bg-[#FFFFFF] transition-transform duration-500 transform translate-y-full group-hover:translate-y-0"></div>
        </button>
      </div>
    </div>
  ) : (
    <div className="w-full bg-[#191919] border border-[#363636] items-center flex justify-between p-3 rounded-[8px]">
      <div className="flex gap-3 basis-[50%] md:basis-[25%]">
        <div className="w-[28px] rounded-[8px] overflow-hidden h-[28px]">
          <img src={props.img} className="w-full h-full " />
        </div>
        <p className="text-[#FFFFFF] text-[14px] sm:text-[16px] font-[500]">
          {props.title}
        </p>
      </div>
      <div className="lg:basis-[35%] md:flex hidden basis-[30%]">
        <p className="text-[#A1A1A1] text-[12px] lg:text-[14px] font-[400]">
          {" "}
          {truncateText(props.desc, 32)}
        </p>
      </div>
      <div className="justify-start  md:flex hidden basis-[15%]">
        {props.tags.map((tag) => (
          <button className="bg-[#222222] text-[12px] text-[#FFFFFF] rounded-[360px] p-1">
            {tag}
          </button>
        ))}
      </div>
      <div className="flex gap-4 items-center self-end justify-end basis-[50%] md:basis-[25%]">
        <p className="text-[#FFFFFF] md:flex hidden font-[400] text-[14px]">
          ${props.price}.00
        </p>
        <button className="relative group overflow-hidden px-4 py-[6px] text-white hover:text-black bg-transparent border border-[#FFFFFF] rounded-md text-[12px] sm:text-[14px] font-[500]">
          <span className="relative z-10"> View Details</span>
          <div className="absolute inset-0 w-full h-full bg-[#FFFFFF] transition-transform duration-500 transform translate-y-full group-hover:translate-y-0"></div>
        </button>
      </div>
    </div>
  );
};
