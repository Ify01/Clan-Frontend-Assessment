import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { data } from "../services/data";

const Sidebar = () => {
  return (
    <aside className="absolute top-0 left-0 bg-mobile bg-cover w-[100%] h-[30%] pt-8 flex items-start justify-center -z-10 sm:h-[100%] sm:z-10 sm:pl-8 sm:basis-[30%] sm:bg-desktop sm:bg-cover sm:rounded-lg sm:relative sm:flex-col sm:justify-center">
      {data.map((item, idx) => {
        return (
          <div
            key={idx}
            className="flex items-center space-x-4 leading-4 sm:mb-10"
          >
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "#000" : "hsl(229, 24%, 87%)",
                background: isActive ? "hsl(228, 100%, 84%)" : "transparent",
                border: isActive ? "none" : "2px solid hsl(229, 24%, 87%)",
                fontWeight: "500",
                width: "2rem",
                height: "2rem",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              })}
              to={item.linkTo}
            >
              {item.id}
            </NavLink>
            <div>
              <p className="hidden sm:block uppercase text-neutral-coolGray text-[14px]">
                {item.step}
              </p>
              <p className="hidden sm:block uppercase text-neutral-lightGray font-[500] tracking-wider">
                {item.title}
              </p>
            </div>
          </div>
        );
      })}
    </aside>
  );
};

export default Sidebar;
