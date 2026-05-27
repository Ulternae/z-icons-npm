import React from 'react';

export const CoreJoystickSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M192 64a48 48 0 1 1 0 96 48 48 0 1 1 0-96m32 155.4c46.3-13.8 80-56.6 80-107.4C304 50.1 253.9 0 192 0S80 50.1 80 112c0 50.7 33.7 93.6 80 107.4V288H64c-35.3 0-64 28.7-64 64v96c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64v-96c0-35.3-28.7-64-64-64h-64v-32h-64v32h-96z"})
);

export default CoreJoystickSolid;
