import React from 'react';

export const LanCaretLargeLeftRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 256 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M9.9 233.4c-12.5 12.5-12.5 32.8 0 45.2l160 160c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6v-320c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9l-160 160zm166.6-98.8v242.8L55.1 256z"})
);

export default LanCaretLargeLeftRegular;
