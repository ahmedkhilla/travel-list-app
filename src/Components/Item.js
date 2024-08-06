export default function Item({ item, onDeleteItem, onChangeStatus }) {
  return (
    <li>
      <input type="checkbox" onClick={() => onChangeStatus(item.id)} />
      <span style={{ textDecoration: item.packed ? "line-through" : "none" }}>
        {item.itemNum} {item.itemText}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
