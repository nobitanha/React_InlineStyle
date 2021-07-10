/** @jsx */
import { css, cx } from "@emotion/react";

export const Emotion = () => {
  const containerStyle = css`
    border: solid 2px #a4ff2e;
    border-radius: 20px;
    padding: 8px;
    margin: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  `;

  /**inline style */
  const titleStyle = css({
    margin: 0,
    color: "#a83d58"
  });

  const buttonStyle = css`
    background-color: #edabb9;
    border: none;
    padding: 8px;
    border-radius: 8px;
    &:hover {
      background-color: #a4ff2e;
      color: #fff;
      cursor: pointer;
    }
  `;
  return (
    <div css={containerStyle}>
      <p css={titleStyle}>-- Emotion --</p>
      <button css={buttonStyle}>FIGHT!!!</button>
    </div>
  );
};
