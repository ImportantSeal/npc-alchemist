import React, { useState } from "react";

const AddItem = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Hae JWT-token localStoragesta (tämä tulee kirjautumisesta)
    const token = localStorage.getItem("token");

    const response = await fetch("http://localhost:5000/api/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}` // Lisää JWT-token pyyntöön
      },
      body: JSON.stringify({
        name,
        price,
        description,
        image
      })
    });

    if (!response.ok) {
      console.error("Failed to add item");
      return;
    }

    const data = await response.json();
    console.log("Item added successfully:", data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <button type="submit">Add Item</button>
    </form>
  );
};

export default AddItem;
