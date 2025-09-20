import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import Footer from "./components/Layout/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow p-4">
          <AppRouter />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
