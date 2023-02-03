import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import ProductDetailes from "./components/ProductDetailes";
import ProductListing from "./components/ProductListing";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" exact element={<ProductListing />} />
        <Route
          path="/product/:productId"
          exact
          element={<ProductDetailes/>}
        />
        <Route>404 not Found</Route>
      </Routes>
    </div>
  );
}

export default App;
