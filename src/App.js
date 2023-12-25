import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MealDetails, Error, Category } from "./pages/index";
import Header from "./components/Header/Header";
import AboutMe from "./pages/AboutMePage/AboutMePage";
import MenuPage from "./pages/MenuPage/MenuPage";
import MealGenerator from "./pages/MealGeneratorPage/MealGenerator";
import HomePage from "./pages/HomePage/HomePage";
import FavouritePage from "./pages/FavouritePage/FavouritePage";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/meal-generator" element={<MealGenerator />} />
        <Route path="/favorites" element={<FavouritePage />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/meal/:id" element={<MealDetails />} />
        <Route path="/meal/category/:name" element={<Category />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
