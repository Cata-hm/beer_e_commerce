//this component is made with Tailwind to show my skills
import React from "react";

const ProfileIcon = () => {
  return (
    <div className="flex -space-x-2 overflow-hidden mr-10">
      <img
        className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt=""
      />
    </div>
  );
};

export default ProfileIcon;
