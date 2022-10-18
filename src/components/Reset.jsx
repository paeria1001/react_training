const Reset = (props) => {
  return (
    <div>
      <h1>リセット</h1>
      <button onClick={() => props.setCountFn(0)}>リセット！</button>
    </div>
  );
};

export default Reset;
