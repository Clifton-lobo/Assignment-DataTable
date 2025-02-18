import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";

const NavigationButtons = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Check which page is active
  const isAccountActive = location.pathname === "/account";
  const isCreateActive = location.pathname === "/education";

  return (
    <div className="flex w-fit mx-4 gap-2 border border-gray-300 bg-[#BFE3FB] cursor-pointer  rounded-md p-1">
      {/* Account Button */}
      <button
        onClick={() => navigate("/account")}
        className={`min-w-[100px] px-4 py-2 rounded-md text-sm font-medium transition ${
          isAccountActive
            ? "bg-white text-black font-bold"
            : "bg-[#BFE3FB] text-gray-400 "
        } `} 
      >
        Account
      </button>

      {/* Create Button */}
      <button
        onClick={() => navigate("/education")}
        className={`flex items-center min-w-[100px] px-4 cursor-pointer py-2 rounded-md text-sm font-medium transition ${
          isCreateActive
            ? "bg-white text-black font-bold"
            : "bg-[#BFE3FB] text-gray-400"
        } `}
      >
        <EditIcon className="w-4 h-4 mr-1" />
        <span>Create</span>
      </button>
    </div>
  );
};

export default NavigationButtons;
