import { useState } from "react";
import Form from "./components/Form";
import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

export const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 1, packed: true },
];

function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => {
      return items.filter((item) => {
        return item.id !== id;
      });
    });
  }

  function handleToggletem(id) {
    setItems((items) => {
      return items.map((item) => {
        if (item.id === id) {
          return { ...item, packed: !item.packed };
        } else {
          return item;
        }
      });
    });
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );

    if (confirmed) setItems([]);
  }

  return (
    <>
      <div className="app">
        <Logo />
        <Form onAddItems={handleAddItems} />
        <PackingList
          items={items}
          onDeleteItem={handleDeleteItem}
          onToggletem={handleToggletem}
          onClearList={handleClearList}
        />
        <Stats items={items} />
      </div>
    </>
  );
}

export default App;
