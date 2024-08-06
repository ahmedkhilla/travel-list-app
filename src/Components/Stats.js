export default function Stats({ items }) {
  const packedItems = items.filter((item) => item.packed === true).length;

  return (
    <footer className="stats">
      <em>
        {" "}
        💼 You have {items.length} items on your list, and you already packed{" "}
        {packedItems} (
        {packedItems > 0 ? Math.round((packedItems / items.length) * 100) : 0})
      </em>
    </footer>
  );
}
