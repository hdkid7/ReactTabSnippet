// eslint-disable-next-line no-unused-vars
import React, { Fragment } from "react";
import { jsx, css } from "@emotion/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

/** @jsx jsx */
// eslint-disable-next-line react/prop-types
const Overlay = ({ text, name, exit, profession, img }) => {
  const container = css`
     {
      height: 100%;
      width: 100%;
      position: fixed;
      padding: 0;
      margin: 0;
      top: 0;
      left: 0;
      z-index: 9999999;
      opacity: 0.5;
      background: black;
    }
  `;

  const professionName = css`
     {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: left;
      line-height: 2em;

      margin-top: 5em;
      margin-right: 2em;

      @media only screen and (max-width: 600px) {
        margin-top: 1em;
        margin-right: 0;
        margin-bottom: 2em;
      }
    }
  `;
  const box = css`
     {
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      margin: auto;
      z-index: 99999999;
      position: fixed;
      height: 30em;
      width: 36em;
      background: black;

      -webkit-box-shadow: 10px 7px 62px 1px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 10px 7px 62px 1px rgba(0, 0, 0, 0.75);
      box-shadow: 10px 7px 62px 1px rgba(0, 0, 0, 0.75);
      animation: grow 0.5s;

      @keyframes grow {
        from {
          transform: scale(0);
        }
        to {
          transform: scale(1);
        }
      }

      @media only screen and (max-width: 600px) {
        height: 40em;
        width: 20em;
      }
    }
  `;
  const textBox = css`
     {
      display: flex;
      justify-content: center;
      justify-content: space-around;
      width: 100%;
      color: white;
      text-align: justify;
      flex-grow: 3;

      @media only screen and (max-width: 600px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
    }
  `;

  const exitButton = css`
     {
      position: absolute;
      top: 0;
      padding-left: 1em;
      padding-top: 1em;
      cursor: pointer;
      color: white;
    }
  `;

  return (
    <Fragment>
      <div css={container}></div>

      <div css={box}>
        <div
          css={css`
             {
              display: flex;
              flex-direction: column;
              align-content: space-between;
              height: 100%;
            }
          `}
        >
          <div css={textBox}>
            <img
              css={css`
                height: 9em;
                width: 9em;
                border-radius: 50%;
                margin-top: 3em;
                maring-left: 2em;
              `}
              src={img}
            />

            <div css={professionName}>
              <span
                css={css`
                  font-size: 1.6em;
                  font-weight: bold;
                `}
              >
                {name}
              </span>
              <span>{profession}</span>
            </div>
          </div>
          <div
            css={css`
              color: white;
              height: 17em;
              text-align: left;
              margin-left: 7rem;
              margin-right: 2rem;
              font-size: 0.9em;
              line-height: 1.5em;

              @media only screen and (max-width: 600px) {
                height: 30em;
                margin-left: 2rem;
              }
            `}
          >
            {text}
          </div>
          <div
            css={css`
              background: gray;
              height: 1em;
              width: 100%;
            `}
          ></div>
        </div>
        <div css={exitButton} onClick={() => exit()}>
          <FontAwesomeIcon size="2x" icon={faTimesCircle} />
        </div>
      </div>
    </Fragment>
  );
};

export default Overlay;
