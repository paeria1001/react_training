import Item from "./Item";
import { useState } from "react";

const ItemList = () => {
  const [itemName, setItemName] = useState("");
  const [itemStatus, setItemStatus] = useState(0);
  const [items, setItems] = useState([]);
  return (
    // ここにItemコンポーネントを並べる
    <div>
      <h2>ToDoリスト</h2>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.name}>
              <Item name={item.name} status={item.status} />
            </li>
          );
        })}
      </ul>
      <div>
        <label htmlFor="itemName">
          タスク：
          <input
            type="text"
            id="itemName"
            onChange={(e) => setItemName(e.target.value)}
            value={itemName}
          />
        </label>
        <label htmlFor="itemStatus">
          完了状態：
          <input
            type="checkbox"
            id="itemStatus"
            onChange={(e) => setItemStatus(e.target.value)}
            value={itemStatus}
          />
        </label>
        <button
          onClick={() => {
            setItems((items) => [
              ...items,
              { name: itemName, status: itemStatus },
            ]);
          }}
        >
          追加
        </button>
      </div>
    </div>
  );
};

export default ItemList;
