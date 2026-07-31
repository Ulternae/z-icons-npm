import React from 'react';

export const CoreShieldSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -1.7 448 517.5',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"m234.1 1.6 170.1 56.7C430.4 67 448 91.5 448 119v146.3c0 84.8-47.9 162.4-123.8 200.3L224 515.8l-100.2-50.1C47.9 427.7 0 350.2 0 265.3V119c0-27.5 17.6-52 43.8-60.7L213.9 1.6 224-1.7z"})
);

export default CoreShieldSolid;
