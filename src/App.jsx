import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "flowbite";
import NavBar from "./components/nav.jsx";
import Footer from "./components/footer.jsx";
import Scarousel from "./components/carousel.jsx";
import CardComponents from "./components/cardcomponents.jsx";
import SideCard from "./components/sidecard.jsx";
import "./App.css";
import MockUp from "./components/mockup.jsx";
import UserChat from "./components/chat.jsx";

function App() {
  return (
    <>
      <NavBar />
      <main className="bg-white dark:bg-gray-900">
        <div className="w-full mx-auto px-5 flex gap-10">
          <Scarousel />
          <SideCard />
        </div>
        <div className="flex flex-wrap items-center justify-center gap-10">
          <CardComponents />
          <CardComponents />
          <CardComponents />
          <CardComponents />
          <CardComponents />
          <CardComponents />
          <CardComponents />
          <CardComponents />
        </div>
        <div className="container h-auto mx-auto px-5 gap-5 mt-5 flex items-center justify-center">
          <MockUp />
          <UserChat />
          <UserChat />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
