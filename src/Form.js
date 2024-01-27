import { useState } from "react";

export default function Form({ onAddItem }) {
  //In forms, input and select have their own state inside the dom and we need them to be inside react. In order to do that, we use a technique called controlled elements.=> react takes the state ownership from the DOM.
  // TLDR for controlled Element, value={stateVal} followed by onEvent((evnt)=>setStateVal(evnt.target.value))
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (evnt) => {
    // prevents page reaload after submission
    evnt.preventDefault();
    //prevent submit when description is empty
    if (!description) return;
    const newItem = {
      id: Math.random().toString(36),
      description,
      quantity,
      packed: false,
    };
    onAddItem(newItem);
    setDescription("");
    setQuantity(1);
  };
  return (
    // The onSubmit is called when the button contained within the form is clicked
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      {/* When dealing with select elemenet the event in placed on the <select>, not the <option> */}
      <select
        value={quantity}
        onChange={(evnt) => setQuantity(Number(evnt.target.value))}
      >
        {/* create an array with set length to map through. _ is the curr index, i is the index */}
        {Array.from({ length: 20 }, (_, i) => i + 1).map((_num) => (
          <option value={_num} key={_num}>
            {_num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(evnt) => setDescription(evnt.target.value)}
      />
      <button onClick={handleSubmit}>Add</button>
    </form>
  );
}
