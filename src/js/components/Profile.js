// eslint-disable-next-line no-unused-vars
import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { jsx, css } from "@emotion/core";
/** @jsx jsx */

const container = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-content: center;
  margin-top: 2em;
`;

const imgStyle = css`
  align-self: center;
  height: 11rem;
  width: 11rem;
  border-radius: 50%;
  cursor: pointer;
`;

const textStyle = css`
  margin-top: 0.6em;
  line-height: 0.1em;
  font-size: 1rem;
`;

const item = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 }
};

// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line react/prop-types
const Profile = ({ name, profession, click, img }) => {
  return (
    <motion.div variants={item} css={container} onClick={() => click()}>
      <img css={imgStyle} src={img} />
      <div css={textStyle}>
        <p
          css={css`
            color: #990000;
            font-weight: bold;
            display: flex;
            justify-content: center;
            align-items: center;
          `}
        >
          {name}
          <span
            css={css`
              margin-left: 0.5em;
            `}
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
        </p>
        <p
          css={css`
            color: grey;
          `}
        >
          {profession}
        </p>
      </div>
    </motion.div>
  );
};

export default Profile;
