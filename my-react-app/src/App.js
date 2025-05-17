import './App.css';
import MenuComponent from "./components/menu/Menu";
import { Routes, Route } from "react-router-dom";
import BinComponent from "./components/bin-component/BinComponent";
import AboutComponent from "./components/about-component/AboutComponent";
import ListComponents from "./components/list-component/ListComponents";

function App() {
  return (
    <section className="app">
      <header className="app-header">
        <MenuComponent/>
      </header>
      <Routes>
        <Route path="/bin" element={<BinComponent />} />
        <Route path="/about" element={<AboutComponent />} />
        <Route path="/" element={<ListComponents />} />
      </Routes>
    </section>
  );
}

export default App;