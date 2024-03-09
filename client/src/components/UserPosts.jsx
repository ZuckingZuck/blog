import React from "react";
import UserSinglePost from "./UserSinglePost";
const UserPosts = ({ params, blogs }) => {
  return (
    <div className="text-white p-3">
      <div className="bg-black text-green-700 text-center p-2 rounded text-xl font-bold">
        @{params.nickname} Tarafından Paylaşılanlar
      </div>
      <div className="grid lg:grid-cols-2 gap-5 justify-items-center w-full mt-5">
        {blogs?.map((blog) => {
          return <UserSinglePost key={blog?._id} post={blog} />;
        })}
      </div>
    </div>
  );
};

export default UserPosts;
