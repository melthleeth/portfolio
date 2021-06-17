import { NavLink, useHistory } from "react-router-dom";\

import classes from "./Navigation.module.css";

const Navigation = () => {
    const history = useHistory();

  const replaceHandler = () => {
    history.replace("/");
  };

  return (<header>
      <NavLink><span>Home</span></NavLink>
  </header>);
}

export default Navigation;