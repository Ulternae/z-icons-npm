import React from 'react';

export const CoreRectangleVerticalSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M384 0c35.3 0 64 28.7 64 64v384c0 33.1-25.2 60.4-57.5 63.7l-6.5.3H64l-6.5-.3C25.2 508.4 0 481.1 0 448V64C0 28.7 28.7 0 64 0z"})
);

export default CoreRectangleVerticalSolid;
