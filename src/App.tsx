import { BrowserRouter, Route, Routes } from "react-router";
import { DashboardLayout } from "@/pages/dashboard/layout";
import { Page404 } from "@/pages/page404";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<DashboardLayout />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
