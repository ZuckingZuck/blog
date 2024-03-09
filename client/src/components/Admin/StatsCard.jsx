import React from "react";

const StatsCard = () => {
  return (
    <div className="stats-card bg-gray-800 text-white rounded-lg p-8">
      <div className="flex gap-x-4">
        <div className="bg-white rounded-full p-3">
          <img className="w-12 h-12 object-cover" src="https://www.shutterstock.com/image-illustration/cute-anime-girl-long-blue-600nw-2369758985.jpg" alt="" />
        </div>
        <div className="flex flex-col justify-center">
          <p className="mb-2 text-lg font-medium text-gray-400">
            Toplam Kullanıcı Sayısı
          </p>
          <p className="text-xl font-semibold text-gray-200">1520</p>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
