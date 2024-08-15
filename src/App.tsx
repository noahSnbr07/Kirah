import { Route, Routes } from "react-router-dom";
import Authorization from "./pages/Authorization";
import Workspace from "./pages/Workspace";
import Protected from "./components/Protected";

export default function App() {
  return (
    <main className="flex-1 h-full w-full flex">
      <Routes>
        <Route path="/:method" element={<Authorization />} />
        <Route path="/workspace" element={<Protected><Workspace /></Protected>} />
      </Routes>
    </main>
  );
}