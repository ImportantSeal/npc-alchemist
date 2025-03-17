import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

const EditItem = () => {
  const { id } = useParams();
  const history = useHistory();
  const [item, setItem] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/items/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch item details");
        }
        const data = await response.json();
        setItem(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchItem();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token"); 
      const response = await fetch(`http://localhost:5000/api/items/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}` 
        },
        body: JSON.stringify(item),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to update item");
      }
      history.push("/");
    } catch (err) {
      setError(err.message);
    }
  };
  

  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (!item) return <p>Loading...</p>;

  return (
    <div>
      <h2>Edit Item</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Item Name:</label>
          <input
            type="text"
            value={item.name}
            onChange={(e) =>
              setItem({ ...item, name: e.target.value })
            }
            required
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="text"
            value={item.price}
            onChange={(e) =>
              setItem({ ...item, price: e.target.value })
            }
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={item.description}
            onChange={(e) =>
              setItem({ ...item, description: e.target.value })
            }
          />
        </div>
        <div>
          <label>Image URL:</label>
          <input
            type="text"
            value={item.image}
            onChange={(e) =>
              setItem({ ...item, image: e.target.value })
            }
          />
        </div>
        <button type="submit">Update Item</button>
      </form>
    </div>
  );
};

export default EditItem;
