const Item = (props) => {
  return (
    <div>
      <div>名前：{props.name}</div>
      <div>
        完了：
        <input
          type="checkbox"
          checked={props.status}
          onChange={props.onChange}
        />
      </div>
    </div>
  );
};

export default Item;
