import React from 'react';

export const CoreRectangle = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M448 32c35.3 0 64 28.7 64 64v320l-.3 6.5c-3.1 30.1-27 54.1-57.1 57.1l-6.5.3h-384l-6.5-.3c-30.1-3.1-54.1-27-57.1-57.1L0 416V96c0-35.3 28.7-64 64-64zM64 416h384V96H64z"})
);

export default CoreRectangle;
