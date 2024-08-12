import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { readSingleProduct, editProd, createProd } from "../apis/crud-ops-axios";
import { useNavigate, useSearchParams } from "react-router-dom";
import "./ProductForm.css";
const ProductForm = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // State for product data with nested objects
  const [product, setProduct] = useState({
    name: '',
    username: '',
    email: '',
    address: {
      street: '',
      suite: '',
      city: '',
      zipcode: ''
    },
    phone: '',
    website: '',
    company: {
      name: '',
      catchPhrase: '',
      bs: ''
    }
  });

  const addProduct = async (data) => {
    await createProd(data);
    navigate("/products");
  };

  const updateProd = async (id, data) => {
    await editProd(id, data);
    navigate("/products");
  };

  const loadProduct = async () => {
    const prodId = searchParams.get("prodId");
    if (prodId) {
      const data = await readSingleProduct(prodId);
      setProduct({
        name: data.name || '',
        username: data.username || '',
        email: data.email || '',
        address: {
          street: data.address?.street || '',
          suite: data.address?.suite || '',
          city: data.address?.city || '',
          zipcode: data.address?.zipcode || ''
        },
        phone: data.phone || '',
        website: data.website || '',
        company: {
          name: data.company?.name || '',
          catchPhrase: data.company?.catchPhrase || '',
          bs: data.company?.bs || ''
        }
      });
    }
  };

  useEffect(() => {
    loadProduct();
  }, [searchParams]);

  const handleChange = (e) => {
    const { name, value, dataset } = e.target;
    if (dataset.parent) {
      setProduct(prevProduct => ({
        ...prevProduct,
        [dataset.parent]: {
          ...prevProduct[dataset.parent],
          [name]: value
        }
      }));
    } else {
      setProduct(prevProduct => ({
        ...prevProduct,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const prodId = searchParams.get("prodId");

    if (searchParams.get("edit") && prodId) {
      updateProd(prodId, product);
    } else {
      addProduct(product);
    }

    // Reset form after submission
    setProduct({
      name: '',
      username: '',
      email: '',
      address: {
        street: '',
        suite: '',
        city: '',
        zipcode: ''
      },
      phone: '',
      website: '',
      company: {
        name: '',
        catchPhrase: '',
        bs: ''
      }
    });
  };

  return (
    <form onSubmit={handleSubmit} className="product-form">
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={product.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={product.username}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={product.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="street">Street:</label>
        <input
          type="text"
          id="street"
          name="street"
          data-parent="address"
          value={product.address.street}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="suite">Suite:</label>
        <input
          type="text"
          id="suite"
          name="suite"
          data-parent="address"
          value={product.address.suite}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="city">City:</label>
        <input
          type="text"
          id="city"
          name="city"
          data-parent="address"
          value={product.address.city}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="zipcode">Zipcode:</label>
        <input
          type="text"
          id="zipcode"
          name="zipcode"
          data-parent="address"
          value={product.address.zipcode}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="phone">Phone:</label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={product.phone}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="website">Website:</label>
        <input
          type="text"
          id="website"
          name="website"
          value={product.website}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="companyName">Company Name:</label>
        <input
          type="text"
          id="companyName"
          name="name"
          data-parent="company"
          value={product.company.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="catchPhrase">Catchphrase:</label>
        <input
          type="text"
          id="catchPhrase"
          name="catchPhrase"
          data-parent="company"
          value={product.company.catchPhrase}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="bs">Business:</label>
        <input
          type="text"
          id="bs"
          name="bs"
          data-parent="company"
          value={product.company.bs}
          onChange={handleChange}
        />
      </div>
      <button type="submit">
        {searchParams.get("edit") ? "Edit" : "Add"} Product
      </button>
    </form>
  );
};

ProductForm.propTypes = {
  addProduct: PropTypes.func,
};

export default ProductForm;
