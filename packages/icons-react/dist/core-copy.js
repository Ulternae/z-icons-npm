import React from 'react';

export const CoreCopy = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 448h320v64H64c-35.3 0-64-28.7-64-64V128h64zM448 0c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H192c-35.3 0-64-28.7-64-64V64c0-35.3 28.7-64 64-64zM192 320h256V64H192z"})
);

export default CoreCopy;
