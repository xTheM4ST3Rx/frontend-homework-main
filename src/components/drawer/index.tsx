import { BanknoteArrowUp, LogOut, TableOfContents } from "lucide-react";
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

  const handlerDontWork = () => {
    alert("Não implementado ainda!");
  };

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
            <ul className="menu menu-horizontal items-center">
              {/* Navbar menu content here */}
              <label className="toggle text-base-content">
                <input
                  type="checkbox"
                  value="light"
                  className="theme-controller"
                />

                <svg
                  aria-label="sun"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2"
                    fill="none"
                    stroke="currentColor"
                  >
                    <circle cx="12" cy="12" r="4"></circle>
                    <path d="M12 2v2"></path>
                    <path d="M12 20v2"></path>
                    <path d="m4.93 4.93 1.41 1.41"></path>
                    <path d="m17.66 17.66 1.41 1.41"></path>
                    <path d="M2 12h2"></path>
                    <path d="M20 12h2"></path>
                    <path d="m6.34 17.66-1.41 1.41"></path>
                    <path d="m19.07 4.93-1.41 1.41"></path>
                  </g>
                </svg>

                <svg
                  aria-label="moon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                  </g>
                </svg>
              </label>
              <li>
                <a>ADMIN</a>
              </li>

              <div className="avatar">
                <div className="w-10 rounded-full">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
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
        <ul className="menu bg-base-200 min-h-full w-80 p-4 ">
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

          <button
            className="flex items-center gap-2 mt-auto hover:underline cursor-pointer"
            onClick={handlerDontWork}
          >
            <div className="text-lg text-blue-500">
              <LogOut />
            </div>
            <div className="text-lg">Sair</div>
          </button>
        </ul>
      </div>
    </div>
  );
}
