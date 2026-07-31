import React from 'react';

export const LanBoxArrowDownSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"m335.1 80 34.3 48H78.7L113 80zM11.9 111.3C4.2 122.2 0 135.2 0 148.5V416c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V148.5c0-13.3-4.2-26.3-11.9-37.2l-49-68.5c-12-16.8-31.4-26.8-52-26.8H112.9c-20.6 0-40 10-52 26.8zM207 401l-72-72c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l31 31V224c0-13.3 10.7-24 24-24s24 10.7 24 24v102.1l31-31c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-72 72c-9.4 9.4-24.6 9.4-33.9 0z"})
);

export default LanBoxArrowDownSolid;
