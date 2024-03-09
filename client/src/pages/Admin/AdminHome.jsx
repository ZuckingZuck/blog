import React from "react";
import Navbar from "../../components/Admin/Navbar";
import Welcome from "../../components/Admin/Welcome";
const AdminHome = () => {
  return (
    <div className="flex h-full">
      <Navbar />
      <Welcome />
    </div>
  );
};

export default AdminHome;
