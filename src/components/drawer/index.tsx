import { BanknoteArrowUp, TableOfContents } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router";

type DrawerProps = {
  children: React.ReactNode;
  sidebarItems: {
    name: string;
    link: string;
    active: boolean;
    icon: React.ReactNode;
  }[];
};

export default function Drawer({ children, sidebarItems }: DrawerProps) {
  const { pathname } = useLocation();

  const navigate = useNavigate();
  const splitPath = pathname.split("/").filter((item) => item !== "");
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col h-screen">
        {/* Navbar */}
        <div className="navbar bg-base-300 w-full ">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>

          <div className="hidden flex-none lg:block ml-auto">
            <ul className="menu menu-horizontal">
              {/* Navbar menu content here */}
              <li>
                <a>ADMIN</a>
              </li>
            </ul>
          </div>
        </div>
        {/* Page content here */}
        <div className="p-2">
          <div className="breadcrumbs text-sm card p-2 bg-base-200 shadow rounded-md">
            <ul>
              {splitPath.map((item, i) => {
                return (
                  <li key={i}>
                    <a
                      onClick={() => {
                        navigate("/" + splitPath.slice(0, i + 1).join("/"));
                      }}
                      className="font-semibold capitalize"
                    >
                      <TableOfContents />
                      {item}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="flex-1 overflow-auto">{children}</div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 min-h-full w-80 p-4">
          {/* Sidebar content here */}

          <div className="flex gap-2 pb-5">
            <BanknoteArrowUp className="h-[30px] w-[30px] text-blue-500" />
            <div className="text-2xl font-semibold">TAYA</div>
          </div>

          {sidebarItems.map((item, i) => {
            return (
              <li key={i} className="my-1">
                {item.active ? (
                  <Link
                    to={item.link}
                    data-status={item.link === pathname}
                    className="data-[status=true]:bg-base-content data-[status=true]:text-base-100 rounded-md hover:bg-transparent hover:underline"
                  >
                    <div className="flex items-center gap-2">
                      <div className="text-lg text-blue-500">{item.icon}</div>
                      <div className="text-lg">{item.name}</div>
                    </div>
                  </Link>
                ) : (
                  <Link to={"#"}>
                    <div className="flex items-center gap-2 opacity-10">
                      <div className="text-lg">{item.icon}</div>
                      <div className="text-lg line-through">{item.name}</div>
                    </div>
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
