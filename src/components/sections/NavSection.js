import React, { component } from "react";
import { Route } from "react-router-dom";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import Home from "../../../src/views/Home";
import Howto from "../../../src/views/Howto";
import Contact from "../../../src/views/Contact";

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};
const NavSection = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {
  return (
    <nav class="container navbar navbar-light bg-light">
      <span class="navbar-brand mb-0 h1">Navbar</span>
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href="/">
            Home <span class="sr-only">(current)</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="hot-to">
            Features
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Pricing
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#">
            Disabled
          </a>
        </li>
      </ul>
      <div class="collapse navbar-collapse" id="navbarNav"></div>
    </nav>
  );
};

NavSection.propTypes = propTypes;
NavSection.defaultProps = defaultProps;

export default NavSection;
