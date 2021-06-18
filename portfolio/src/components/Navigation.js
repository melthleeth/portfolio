import { NavLink, useHistory } from "react-router-dom";\

import classes from "./Navigation.module.css";

const Navigation = () => {
    const history = useHistory();

  const replaceHandler = () => {
    history.replace("/");
  };

  return (<header>
      <NavLink to="/home" activeClassName={classes.active}><span>HOME</span></NavLink>
      <NavLink to="/about" activeClassName={classes.active}><span>ABOUT</span></NavLink>
      <NavLink to="/skills" activeClassName={classes.active}><span>SKILLS</span></NavLink>
      <NavLink to="/projects" activeClassName={classes.active}><span>PROJECTS</span></NavLink>
      <NavLink to="/experience" activeClassName={classes.active}><span>EXPERIENCE</span></NavLink>
      <NavLink to="/education" activeClassName={classes.active}><span>EDUCATION</span></NavLink>
      <NavLink to="/certificate" activeClassName={classes.active}><span>CERTIFICATE</span></NavLink>
      <NavLink to="/contact" activeClassName={classes.active}><span>CONTACT</span></NavLink>
  </header>);
}

export default Navigation;