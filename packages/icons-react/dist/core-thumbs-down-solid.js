import React from 'react';

export const CoreThumbsDownSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"m160 352 96 160c35.3 0 64-28.7 64-64v-96h128c35.3 0 64-28.7 64-64V176l-43.4-78.2C446 57.2 403.2 32 356.7 32H0v320zm0-64H64V96h96z"})
);

export default CoreThumbsDownSolid;
