export const StyledJsx = () => {
  return (
    <>
      <div className="container">
        <p className="titleStyle">-- Styled JSX --</p>
        <button className="buttonStyle">FIGHT!!!</button>
      </div>
      <style jsx="true">{`
        .container {
          border: solid 2px #a4ff2e;
          border-radius: 20px;
          padding: 8px;
          margin: 8px;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
        .titleStyle {
          margin: 0;
          color: #a83d58;
        }
        .buttonStyle {
          background-color: #edabb9;
          border: none;
          padding: 8px;
          border-radius: 8px;
          &:hover {
            background-color: #a4ff2e;
            color: #fff;
            cursor: pointer;
          }
        }
      `}</style>
    </>
  );
};
