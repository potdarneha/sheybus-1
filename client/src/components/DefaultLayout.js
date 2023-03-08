import React, { useState, useEffect } from "react";
import "../resourses/layout.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import './DefaultLayout.css'

function DefaultLayout({ children }) {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const [isMobileScreen, setIsMobileScreen] = useState(false);
  const { user } = useSelector((state) => state.users);
  const userMenu = [
    {
      name: "Home",
      // icon: "ri-home-line",
      path: "/",
    },
    {
      name: "Bookings",
      // icon: "ri-file-list-line",
      path: "/bookings",
    },
    {
      name: "Information",
      // icon: "ri-user-line",
      path: "/profile",
    },
    {
      name: "Logout",
      // icon: "ri-logout-box-line",
      path: "/logout",
    },
  ];
  const adminMenu = [
    {
      name: "Home",
      path: "/",
      // icon: "ri-home-line",
    },
    {
      name: "Buses",
      path: "/admin/buses",
      // icon: "ri-bus-line",
    },
    {
      name: "Users",
      path: "/admin/users",
      // icon: "ri-user-line",
    },
   
    {
      name: "Logout",
      path: "/logout",
      // icon: "ri-logout-box-line",
    },
  ];
  const menuToBeRendered = user?.isAdmin ? adminMenu : userMenu;
  let activeRoute = window.location.pathname;
  if (window.location.pathname.includes("book-now")) {
    activeRoute = "/";
  }

  const handleToggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobileScreen(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="layout-parent">
      <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
        <div className="sidebar-header">
          <h1 className="logo">SB</h1>
          <h1 className="role">
            {user?.name} <br /> Role: {user?.isAdmin ? "Admin" : "User"}
          </h1>
          {isMobileScreen && (
            <button onClick={() => setCollapsed(!collapsed)}>
              {collapsed ? (
                <i className="ri-menu-2-fill "></i>
              ) : (
                <i className="ri-close-line"></i>
              )}
            </button>
          )}
        </div>
        <div className="menu">
          {menuToBeRendered.map((item, index) => {
            return (
              <div
                className={`${
                  activeRoute === item.path && ""
                } menu-item`}
                key={index}
              >
                <i className={item.icon}></i>
                {!collapsed && (
                  <span
                    onClick={() => {
                      if (item.path === "/logout") {
                        localStorage.removeItem("token");
                        navigate("/login");
                      } else {
                        navigate(item.path);
                      }
                    }}
                  >
                    {item.name}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="body">
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
