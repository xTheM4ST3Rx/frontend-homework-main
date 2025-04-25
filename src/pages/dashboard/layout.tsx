import { Navigate, Route, Routes } from "react-router";
import Propostas from "./propostas";
import Drawer from "@/components/drawer";
import { HandHelping, Wallpaper } from "lucide-react";
import { DashStats } from "./dashboard";

const sidebarItems = [
  {
    name: "Overview",
    link: "/",
    active: true,
    icon: <Wallpaper />,
  },
  {
    name: "Propostas",
    link: "/propostas",
    active: true,
    icon: <HandHelping />,
  },
];

export function DashboardLayout() {
  return (
    <Drawer sidebarItems={sidebarItems}>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={<DashStats />} />

        {/* Propostas */}

        <Route path="/propostas" element={<Propostas />} />

        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </Drawer>
  );
}
