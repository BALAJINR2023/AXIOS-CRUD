import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Products from "./pages/Products";
import ProductForm from "./pages/ProductForm";
import Layout from "./pages/Layout";

const DefaultElement = () => {
  return (
    <>
      <h4>No page found,please check the URL</h4>
      <Link to="/">Home</Link>
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout/>}>
          <Route index element={ <h1>AXIOS CRUD TASK</h1> }/>
          <Route path="/products" element={<Products/>} />
          {/* <Route path="/products/:prodId" element={<h2>Product Page</h2>} /> */}
          <Route path="/add-product" element={<ProductForm/>} />
          <Route path="*" element={<DefaultElement/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
