import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import AppRouter from "./router/AppRouter";
import NavBar from "./components/Layout/NavBar";
import Footer from "./components/Layout/Footer";

const [searchValue, setSearchValue] = useState<string>("");


function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <NavBar value={searchValue} onChange={setSearchValue}/>
        <main className="flex-grow p-4">
          <AppRouter />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;