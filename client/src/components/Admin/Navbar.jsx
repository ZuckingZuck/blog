// AdminNavbar.js

import React from "react";

const AdminNavbar = () => {
  return (
    <nav className="bg-gray-800 h-full fixed flex flex-col items-center">
      <div className="mt-6 mb-6 px-3">
        {/* Burada "A" harfi yerine sitenizin logosunu ya da başka bir simgeyi ekleyebilirsiniz */}
        <p className="text-3xl text-white font-bold text-center logo"><i className="fa-solid fa-arrow-left-long"></i>IPSS Admin</p>
      </div>
      <div className="flex flex-col justify-between h-full">
        <div>
          <ul className="flex flex-col items-center text-xl gap-3">
            <li className="mb-4">
              <a href="#" className="text-white">
                <i className="fas fa-home"></i> Ana Sayfa
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="text-white">
                <i className="fas fa-users"></i> Kullanıcılar
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="text-white">
                <i className="fa-solid fa-list"></i> Paylaşımlar
              </a>
            </li>
            {/* İhtiyacınıza göre başka bağlantılar ekleyebilirsiniz */}
          </ul>
        </div>
        <div>
          <ul>
            <li className="mb-4">
              <a href="#" className="text-white">
                <i class="fa-solid fa-user-gear"></i> Zuckerberg
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
