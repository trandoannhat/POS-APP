import React, { useEffect, useState } from "react";

const Greetings = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  //   const formatDate = (date) => {
  //     const months = [
  //       "January",
  //       "February",
  //       "March",
  //       "April",
  //       "May",
  //       "June",
  //       "July",
  //       "August",
  //       "September",
  //       "October",
  //       "November",
  //       "December",
  //     ];
  //     return `${months[date.getMonth()]} ${String(date.getDate()).padStart(
  //       2,
  //       "0"
  //     )}, ${date.getFullYear()}`;
  //   };
  //   const formatDate = (date) => {
  //     const months = [
  //       "Tháng 1",
  //       "Tháng 2",
  //       "Tháng 3",
  //       "Tháng 4",
  //       "Tháng 5",
  //       "Tháng 6",
  //       "Tháng 7",
  //       "Tháng 8",
  //       "Tháng 9",
  //       "Tháng 10",
  //       "Tháng 11",
  //       "Tháng 12",
  //     ];

  //     return `${String(date.getDate()).padStart(2, "0")} ${
  //       months[date.getMonth()]
  //     }  ${date.getFullYear()}`;
  //   };
  const formatDate = (date) => {
    return date.toLocaleDateString("vi-VN", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  const formatTime = (date) => {
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className="flex justify-between items-center px-8 mt-5">
      <div>
        <h1 className="text-[#f5f5f5] text-2xl font-semibold tracking-wide">
          Chào mừng bạn, Nhat Tran
        </h1>
        <p className="text-[#ababab] text-sm">
          Hãy mang đến dịch vụ tốt nhất cho khách hàng 😃
        </p>
      </div>
      <div>
        <h1 className="text-[#f5f5f5] text-3xl font-bold tracking-wide w-[130px]">
          {formatTime(dateTime)}
        </h1>
        <p className="text-[#ababab] text-sm">{formatDate(dateTime)}</p>
      </div>
    </div>
  );
};

export default Greetings;
