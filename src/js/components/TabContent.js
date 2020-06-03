// eslint-disable-next-line no-unused-vars
import React from "react";

import { jsx, css } from "@emotion/core";
/** @jsx jsx */

const tabContents = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
  grid-gap: 1rem;

  height: 100%;
  grid-auto-flow: dense;
`;

// eslint-disable-next-line react/prop-types
const TabContent = ({ children }) => (
  <div
    css={css`
      position: absolute;

      left: 0;
      right: 0;
      margin: auto;
    `}
  >
    <div css={tabContents}>{children}</div>
  </div>
);

export default TabContent;
