const Upper = (props) => {
  return (
    <>
      <div className="upperbar">
        <img src={props.avatar}></img>
        <p>{props.home}</p>
      </div>
    </>
  );
};
export default Upper;
