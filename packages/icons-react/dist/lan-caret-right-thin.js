import React from 'react';

export const LanCaretRightThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 256 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M246.9 233.4c11.6 12.9 12.8 32.4 0 45.2l-128 128c-9.1 9.2-22.9 11.9-34.9 6.9l-4.3-2.2c-9.5-5.7-15.5-16.1-15.5-27.4v-256l.3-4.8c1.4-9.4 7-17.7 15.1-22.6l4.3-2.2c10.5-4.3 22.3-2.8 31.2 3.8l3.7 3.1 128 128zm-11.3 33.9c5.8-5.8 6.2-15.5-.5-23.1L107.6 116.7c-4.6-4.6-11.5-5.9-17.4-3.5s-9.9 8.3-9.9 14.8v256c0 6.5 3.9 12.3 9.9 14.8s12.9 1.1 17.4-3.5z"})
);

export default LanCaretRightThin;
