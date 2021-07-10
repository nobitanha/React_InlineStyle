import classes from "./CssModule.module.scss";

export const CssModule = () => {
  return (
    <div className={classes.container}>
      <p className={classes.titleStyle}>- CSS Modules -</p>
      <button className={classes.buttonStyle}>FIGHT!!!</button>
    </div>
  );
};
