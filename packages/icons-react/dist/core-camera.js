import React from 'react';

export const CoreCamera = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"m352 32 64 64h32c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h32l64-64zM141.3 141.3 122.6 160H64.1v256h384V160h-58.5l-64-64h-139zM312 272a56 56 0 1 0-112 0 56 56 0 1 0 112 0m-168 0a112 112 0 1 1 224 0 112 112 0 1 1-224 0"})
);

export default CoreCamera;
