import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import NavBar from "./components/Layout/NavBar";
import Footer from "./components/Layout/Footer";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <NavBar value={search} onChange={setSearch} />
        <main className="flex-grow p-4">
          <AppRouter />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
