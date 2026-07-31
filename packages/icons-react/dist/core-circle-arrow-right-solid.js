import React from 'react';

export const CoreCircleArrowRightSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512m-33-351 71 71H127.9v48H294l-71 71 33.9 33.9 112-112c9.4-9.4 9.4-24.6 0-33.9L257 127z"})
);

export default CoreCircleArrowRightSolid;
