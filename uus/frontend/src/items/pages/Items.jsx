import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../shared/components/context/auth-context";
import "./Items.css"; // Lisää halutessasi tyylit

const Items = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const { isLoggedIn } = useAuthContext();

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/items");
        if (!response.ok) {
          throw new Error("Failed to fetch items");
        }
        const data = await response.json();
        setItems(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchItems();
  }, []);

  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (!items.length) return <p>Loading items...</p>;

  return (
    <div className="items-container">
      <h2>Menu Items</h2>
      <ul className="items-list">
        {items.map((item) => (
          <li key={item.id} className="item-card">
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>Price: ${item.price}</p>
            {item.image && (
              <img src={item.image} alt={item.name} className="item-image" />
            )}
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
    </div>
  );
};

export default Items;
