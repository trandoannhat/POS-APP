import React, { useState } from "react";
import { MdReceiptLong, MdTableBar } from "react-icons/md";
import { CiCircleMore } from "react-icons/ci";
import { BiSolidDish } from "react-icons/bi";
import { MdDashboard } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";
function BottomNav() {
  const navigate = useNavigate();
  const [guestCount, setGuestCount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const increment = () => {
    if (guestCount >= 6) return;
    setGuestCount((prev) => prev + 1);
  };
  const decrement = () => {
    if (guestCount <= 0) return;
    setGuestCount((prev) => prev - 1);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#262626] p-2 h-16 flex justify-around">
      <button
        onClick={() => navigate("/")}
        className="flex items-center justify-center text-[#f5f5f5] bg-[#343434] w-[200px] rounded-[20px]"
      >
        <MdDashboard className="inline mr-2" size={20} />
        <p>Tổng quan</p>
      </button>
      <button
        onClick={() => navigate("/orders")}
        className="flex items-center justify-center text-[#ababab] w-[200px]"
      >
        <MdReceiptLong className="inline mr-2" size={20} />
        <p> Đơn hàng</p>
      </button>
      <button
        onClick={() => navigate("/tables")}
        className="flex items-center justify-center text-[#ababab] w-[200px]"
      >
        <MdTableBar className="inline mr-2" size={20} />
        <p> Bàn</p>
      </button>
      <button className="flex items-center justify-center text-[#ababab] w-[200px]">
        <CiCircleMore className="inline mr-2" size={20} />
        <p> Thêm</p>
      </button>
      {/* nút menu  */}
      <button
        onClick={openModal}
        className="absolute bottom-6 bg-[#F6B100] text-[#f5f5f5] rounded-full p-3 items-center"
      >
        <BiSolidDish size={30} />
      </button>
      {/* Modal Component */}
      <Modal isOpen={isModalOpen} onClose={closeModal} title="Tạo đơn hàng">
        <div>
          <label className="block text-[#ababab] mb-2 text-sm font-medium">
            Tên khách hàng
          </label>
          <div className="flex items-center rounded-lg p-3 px-4 bg-[#1f1f1f]">
            <input
              type="text"
              name=""
              id=""
              placeholder="Nhập tên khách hàng"
              className="bg-transparent flex-1 text-white focus:outline-none"
            ></input>
          </div>
        </div>
        <div>
          <label className="block text-[#ababab] mb-2 mt-3 text-sm font-medium">
            Số điện thoại
          </label>
          <div className="flex items-center rounded-lg p-3 px-4 bg-[#1f1f1f]">
            <input
              type="number"
              name=""
              id=""
              placeholder="+84.999 999 999"
              className="bg-transparent flex-1 text-white focus:outline-none"
            ></input>
          </div>
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-[#ababab]">
            Khách
          </label>
          <div className="flex items-center justify-between bg-[#1f1f1f] px-4 py-3 rounded-lg">
            <button onClick={decrement} className="text-yellow-500 text-2xl">
              &minus;
            </button>
            <span className="text-white">{guestCount} Người</span>
            <button onClick={increment} className="text-yellow-500 text-2xl">
              &#43;
            </button>
          </div>
        </div>
        <button
          onClick={() => navigate("/tables")}
          className="w-full bg-[#F6B100] text-[#f5f5f5]  py-3 rounded-lg mt-8 hover:bg-yellow-800"
        >
          Tạo đơn hàng
        </button>
      </Modal>
    </div>
  );
}

export default BottomNav;
