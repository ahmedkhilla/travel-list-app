export default function Form({
  onChangeText,
  onChangeNum,
  itemNum,
  itemText,
  onAddItem,
}) {
  return (
    <form className="add-form" onSubmit={onAddItem}>
      <h3>What do you need for your 😍 trip?</h3>
      <select onChange={onChangeNum} value={itemNum}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="item..."
        onChange={onChangeText}
        value={itemText}
      />
      <button>Add</button>
    </form>
  );
}
