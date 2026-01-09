import { HomePage } from "@/features/home-page";
import { MainLayout } from "./layouts/MainLayout";
import { BrowserRouter } from "react-router";
import { Routes, Route } from "react-router";
import { StatsPage } from "@/features/stats-page";
import { ProfilePage } from "@/features/profile-page";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/stats" element={<StatsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
