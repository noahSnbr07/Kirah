import { Route, Routes } from "react-router-dom";
import Authorization from "./pages/Authorization";
import Workspace from "./pages/Workspace";

export default function App() {
  return (
    <main className="flex-1 h-full w-full flex">
      <Routes>
        <Route path="/" element={<Authorization />} />
        <Route path="/workspace" element={<Workspace />} />
      </Routes>
    </main>
  );
}