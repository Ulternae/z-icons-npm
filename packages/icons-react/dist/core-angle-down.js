import React from 'react';

export const CoreAngleDown = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"m448.3 146.8-192 192-192-192L19.1 192l214.6 214.6c12.5 12.5 32.8 12.5 45.3 0L493.5 192z"})
);

export default CoreAngleDown;
