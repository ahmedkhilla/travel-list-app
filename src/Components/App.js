import { useState, useEffect } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";
export default function App() {
  const [itemText, setItemtext] = useState("");
  const [itemNum, setItemNum] = useState(1);
  const [items, setItems] = useState(() => {
    return JSON.parse(localStorage.getItem("storedItems")) || [];
  });

  useEffect(() => {
    localStorage.setItem("storedItems", JSON.stringify(items));
  }, [items]);

  function handleChangeText(e) {
    setItemtext(e.target.value);
  }
  function handleChangeNum(e) {
    setItemNum(e.target.value);
  }
  function handleAddItem(e) {
    e.preventDefault();
    const id = Math.trunc(Math.random() * 1000000) + 1;
    setItems((items) => {
      return [
        ...items,
        {
          id,
          itemText,
          itemNum,
          packed: false,
        },
      ];
    });
    setItemNum(1);
    setItemtext("");
  }
  function handleClearList() {
    setItems([]);
    setItemNum(1);
    setItemtext("");
  }
  function handleDeleteItem(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  function handleChangeStatus(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form
        onChangeText={handleChangeText}
        onChangeNum={handleChangeNum}
        itemNum={itemNum}
        onAddItem={handleAddItem}
        itemText={itemText}
      />
      <PackingList
        items={items}
        onClearList={handleClearList}
        onDeleteItem={handleDeleteItem}
        onChangeStatus={handleChangeStatus}
      />
      <Stats items={items} />
    </div>
  );
}
