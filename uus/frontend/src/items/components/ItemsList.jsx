import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../shared/components/context/auth-context";
import "./ItemsList.css";

const ItemsList = ({ items }) => {
  const { isLoggedIn } = useAuthContext();

  if (!items || items.length === 0) {
    return <p>No items found.</p>;
  }

  return (
    <ul className="items-list">
      {items.map((item) => (
        <li key={item.id} className="item-card">
          <img
            src={`http://localhost:5000/${item.image}`}
            alt={item.name}
            className="item-image"
          />
          <div>
            <strong>{item.name}</strong> - ${item.price}
          </div>
          {isLoggedIn && (
            <div className="item-actions">
              <Link to={`/items/${item.id}/edit`}>
                <button className="edit-button">Edit</button>
              </Link>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default ItemsList;
