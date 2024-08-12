import { useEffect, useState } from "react";
import Product from "../component/Product";
// import { deleteProduct } from "../apis/crud-ops";
import { readAllData, deleteProduct } from "../apis/crud-ops-axios";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();
  const [prods, setProds] = useState([]);

  const loadProducts = async () => {
    const data = await readAllData();
    setProds(data);
  };

  const removeProduct = async (prodId) => {
    
    await deleteProduct(prodId);
    setProds(prods.filter((product) => product.id !== prodId));
  };

  const navigateToAddition = () => {
    navigate("/add-product");
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <>
      <h1>List Of Products</h1>
      <button
        onClick={navigateToAddition}
        style={{
          fontSize: 35,
          float: "right",
          position: "absolute",
          right: 0,
          top: 0,
        }}
      >
        +
      </button>
      {prods.map((product) => (
        <Product {...product} key={product.id} removeProduct={removeProduct} />
      ))}
    </>
  );
};

export default Products;
