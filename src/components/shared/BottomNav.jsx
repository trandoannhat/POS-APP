import React from "react";
import { MdPointOfSale, MdReceiptLong, MdTableBar } from "react-icons/md";
import { CiCircleMore } from "react-icons/ci";
import { BiSolidDish } from "react-icons/bi";
function BottomNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#262626] p-2 h-16 flex justify-around">
      <button className="flex items-center justify-center text-[#f5f5f5] bg-[#343434] w-[200px] rounded-[20px]">
        <MdPointOfSale className="inline mr-2" size={20} />
        <p> Bán hàng</p>
      </button>
      <button className="flex items-center justify-center text-[#ababab] w-[200px]">
        <MdReceiptLong className="inline mr-2" size={20} />
        <p> Đơn hàng</p>
      </button>
      <button className="flex items-center justify-center text-[#ababab] w-[200px]">
        <MdTableBar className="inline mr-2" size={20} />
        <p> Bàn</p>
      </button>
      <button className="flex items-center justify-center text-[#ababab] w-[200px]">
        <CiCircleMore className="inline mr-2" size={20} />
        <p> Thêm</p>
      </button>
      <button className="absolute bottom-6 bg-[#F6B100] text-[#f5f5f5] rounded-full p-3 items-center">
        <BiSolidDish size={30} />
      </button>
    </div>
  );
}

export default BottomNav;
