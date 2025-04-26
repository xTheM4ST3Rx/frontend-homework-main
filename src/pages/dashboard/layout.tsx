import { Navigate, Route, Routes } from "react-router";
import Propostas from "./propostas";
import Drawer from "@/components/drawer";
import { FileStack, HandHelping, Wallpaper } from "lucide-react";
import { DashStats } from "./dashboard";
import Docs from "./docs";

const sidebarItems = [
  {
    name: "Overview",
    link: "/dashboard",
    active: true,
    icon: <Wallpaper />,
  },
  {
    name: "Propostas",
    link: "/propostas",
    active: true,
    icon: <HandHelping />,
  },
  {
    name: "API Docs",
    link: "/docs",
    active: true,
    icon: <FileStack />,
  },
];

export function DashboardLayout() {
  return (
    <Drawer sidebarItems={sidebarItems}>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={<DashStats />} />

        <Route path="/propostas" element={<Propostas />} />

        <Route path="/docs" element={<Docs />} />

        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </Drawer>
  );
}
