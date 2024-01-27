import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";
export default function App() {
  const [items, setItems] = useState([]);
  const handleAddItem = (item) => {
    setItems((_cItems) => [..._cItems, item]);
  };
  const handleDeleteItem = (id) => {
    setItems((_cItems) => _cItems.filter((_item) => _item.id !== id));
  };
  const handleToggleItem = (id) => {
    setItems((_cItems) =>
      _cItems.map((_item) =>
        _item.id === id ? { ..._item, packed: !_item.packed } : _item
      )
    );
  };
  const handleClearItems = () => {
    const confirmed = window.confirm(
      "Are you sure you want to clear the items list"
    );
    if (!confirmed) return;
    setItems([]);
  };
  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearItems={handleClearItems}
      />
      <Stats items={items} onToggleItem={handleToggleItem} />
    </div>
  );
}
