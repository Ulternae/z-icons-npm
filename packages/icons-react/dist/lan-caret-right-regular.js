import React from 'react';

export const LanCaretRightRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 256 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M246.9 233.4c11.6 12.9 12.8 32.4 0 45.2l-128 128c-9.1 9.2-22.9 11.9-34.9 6.9l-4.3-2.2c-9.5-5.7-15.5-16.1-15.5-27.4v-256l.3-4.8c1.4-9.4 7-17.7 15.1-22.6l4.3-2.2c12-4.9 25.7-2.2 34.9 6.9l128 128zm-134.6-66.8v178.8l89.4-89.4z"})
);

export default LanCaretRightRegular;
