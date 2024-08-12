import PropTypes from "prop-types";
import "./Product.css";
import { useNavigate } from "react-router-dom";
const Product = ({ id, name, username, email, address, phone, website, company,removeProduct }) => {
  const navigate = useNavigate();
  return (
    <div className="product-card">
      <h2>{name} (#{id})</h2>
      <p><strong>Username:</strong> {username}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Address:</strong> {`${address.street}, ${address.suite}, ${address.city}, ${address.zipcode}`}</p>
      <p><strong>Phone:</strong> {phone}</p>
      <p><strong>Website:</strong> <a href={`http://${website}`} target="_blank" rel="noopener noreferrer">{website}</a></p>
      <p><strong>Company:</strong> {company.name}</p>
      <p><strong>Catchphrase:</strong> {company.catchPhrase}</p>
      <p><strong>Business:</strong> {company.bs}</p>
      <div>
      <button onClick={() => removeProduct(id)}>DELETE</button>
      <button onClick={() => {navigate(`/add-product?edit=true&prodId=${id}`);}}> EDIT</button>
      </div>
    </div>
  );
};

Product.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    street: PropTypes.string.isRequired,
    suite: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    zipcode: PropTypes.string.isRequired,
   }).isRequired,
  phone: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  company: PropTypes.shape({
    name: PropTypes.string.isRequired,
    catchPhrase: PropTypes.string.isRequired,
    bs: PropTypes.string.isRequired,
  }).isRequired,
  removeProduct: PropTypes.func.isRequired,
};

export default Product;
