import { IProductCardProps } from "../data-helper";

export const ProductCard = ({ props }: { props: IProductCardProps }) => {
  return (
    <div className="h-[350px] border border-[#363636] rounded-[12px] overflow-hidden bg-[#191919] max-w-[300px] ">
      <div className="h-[40%]">
        <img src={props.img} alt="" />
      </div>
      <div className="h-[60%] py-4 px-4">
        <p className="text-[#FFFFFF] font-[400] text-[16px]">${props.price}</p>
        <h4 className="text-[#FFFFFF] mt-2 font-[500] text-[18px]">{props.title}</h4>
        <p className="text-[#A1A1A1] mb-2 font-[400] text-[12px] leading-[16px]">
          {props.desc}
        </p>
        {props.tags.map((tag) => (
          <button className="bg-[#222222] text-[12px] text-[#FFFFFF] rounded-[360px] p-1">
            {tag}
          </button>
        ))}
        <div className="border cursor-pointer mt-2 flex justify-center w-full border-[#FFFFFF] py-2 rounded-[8px]">
          <button className="text-[#FFFFFF]">View Details</button>
        </div>
      </div>
    </div>
  );
};
