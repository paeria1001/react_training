const Item = (props) => {
  return (
    <div>
      <div>名前：{props.name}</div>
      <div>
        完了状態：{props.status}
        <input type="checkbox" id="itemStatus" />
      </div>
    </div>
  );
};

export default Item;
