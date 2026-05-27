import React from 'react';

export const CoreCircleArrowLeftSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512M143 239c-9.4 9.4-9.4 24.6 0 33.9l112 112 33.9-33.9-71-71H384v-48H217.9l71-71-33.9-33.9-112 112z"})
);

export default CoreCircleArrowLeftSolid;
