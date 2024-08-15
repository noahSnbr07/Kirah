import Header from "./components/Header";
import Main from "./components/Main";
import SideBar from "./components/SideBar";



export default function App() {
  return (
    <main className="flex-1 h-full w-full flex">
      <SideBar />
      <div className="flex flex-col w-full">
        <Header />
        <Main />
      </div>
    </main>
  );
}