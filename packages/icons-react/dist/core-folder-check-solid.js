import React from 'react';

export const CoreFolderCheckSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M288 96h160c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h160zm-64 222.1-64-64-33.9 33.9 81 81c9.4 9.4 24.6 9.4 33.9 0l145-145-33.9-33.9-128 128z"})
);

export default CoreFolderCheckSolid;
