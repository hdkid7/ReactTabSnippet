// eslint-disable-next-line no-unused-vars
import React from "react";

import { NavLink } from "react-router-dom";
import { jsx, css } from "@emotion/core";
/** @jsx jsx */

const liStyle = css`
  border: 1px solid #aaa;
  background: #cfe0e3;
  display: inline-block;
  position: relative;
  margin-right: 1em;
  padding-top: 0.5em;
  z-index: 0;
  font-size: 1rem;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  &:before,
  &:after {
    position: absolute;
    bottom: -1px;
    width: 6px;
    height: 6px;
    content: " ";

    @media only screen and (max-width: 600px) {
      content: initial;
    }
  }
  &:before {
    left: -6px;
  }
  &:after {
    right: -6px;
  }
  &:after,
  &:before {
    border: 1px solid #aaa;
  }

  &:before {
    border-bottom-right-radius: 6px;
    border-width: 0 1px 1px 0;
  }
  &:after {
    border-bottom-left-radius: 6px;
    border-width: 0 0 1px 1px;
  }
  &:before {
    box-shadow: 2px 2px 0 #ececec;
  }
  &:after {
    box-shadow: -2px 2px 0 #ececec;
  }
  @media only screen and (max-width: 600px) {
    display: block;
    margin-right: initial;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    padding-top: 0em;
  }
`;
// eslint-disable-next-line react/prop-types
const NavLinkMaker = ({ route, children }) => (
  <li css={liStyle}>
    <NavLink
      exact
      to={`/${route}`}
      activeStyle={{
        background: "#FFF",
        color: "#000",
        zIndex: "2",
        borderBottomColor: "#FFF"
      }}
    >
      {children}
    </NavLink>
  </li>
);

export default NavLinkMaker;
