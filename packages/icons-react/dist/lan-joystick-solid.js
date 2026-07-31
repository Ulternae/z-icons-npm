import React from 'react';

export const LanJoystickSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M384 352c35.3 0 64 28.7 64 64v32c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64v-32c0-35.3 28.7-64 64-64zM224 0c61.9 0 112 50.1 112 112 0 50.7-33.7 93.5-80 107.3V304h-64v-84.7c-46.3-13.8-80-56.6-80-107.3C112 50.1 162.1 0 224 0m-24 48a24 24 0 1 0 0 48 24 24 0 1 0 0-48"})
);

export default LanJoystickSolid;
