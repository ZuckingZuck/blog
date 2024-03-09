import React from "react";
import moment from "moment";
const ProfileCard = ({ user, blogs }) => {
  const formattedDate = moment(user?.createdAt).format("DD.MM.YYYY");
  return (
    <div className="text-white flex flex-col md:flex-row justify-center p-3">
      <div className="bg-gray-800 p-5 flex flex-col md:flex-row justify-between gap-5 w-full rounded-lg">
        <div className="profileCart flex flex-col items-center">
          <img src="../img/profile.svg" alt="" className="h-28 w-28" />
          <div className="mt-1 text-xl">
            @{user?.nickname}{" "}
            {user?.role === "admin" ? (
              <i className="fa-solid fa-crown text-blue-500"></i>
            ) : null}
            {user?.role === "writer" ? (
              <i className="fa-solid fa-feather text-blue-500"></i>
            ) : null}
          </div>
        </div>
        <div className="postsInfo flex flex-col items-center justify-center h-full p-2">
          <i className="text-xl fa-solid fa-square-plus"></i>
          <h1 className="text-xl">Toplam Paylaşım</h1>
          <h1 className="text-xl">{blogs?.length}</h1>
        </div>
        <div className="postsInfo flex flex-col items-center justify-center h-full  p-2">
          <i className="text-xl fa-solid fa-trophy"></i>
          <h1 className="text-xl">IPSS Puanı</h1>
          <h1 className="text-xl">{user?.IPSSPoint}</h1>
        </div>
        <div className="postsInfo flex flex-col items-center justify-center h-full  p-2">
          <i className="text-xl fa-solid fa-calendar-days"></i>
          <h1 className="text-xl">Oluşturulma Tarihi</h1>
          <h1 className="text-xl">{formattedDate}</h1>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
