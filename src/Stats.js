export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Add some items!</em>
      </p>
    );
  const totalItems = items
    .map((_item) => _item.quantity)
    .reduce((acc, _cQuantity) => acc + _cQuantity, 0);

  const packedItems = items
    .filter((_item) => _item.packed)
    .map((_item) => _item.quantity)
    .reduce((acc, _cQuantity) => acc + _cQuantity, 0);

  const packingPercentage = (packedItems * 100) / totalItems;
  return (
    <footer className="stats">
      {packingPercentage === 100 ? (
        <em>You're all set! ✈️</em>
      ) : (
        <em>
          💼You have {totalItems} items on your list, and you already packed{" "}
          {packingPercentage}%
        </em>
      )}
    </footer>
  );
}
