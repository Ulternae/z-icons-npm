import React from 'react';

export const LanLeftToBracketRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M311 95 167 239c-9.4 9.4-9.4 24.6 0 33.9L311 417c6.9 6.9 17.2 8.9 26.2 5.2S352 409.7 352 400v-64h112c26.5 0 48-21.5 48-48v-64c0-26.5-21.5-48-48-48H352v-64c0-9.7-5.8-18.5-14.8-22.2S317.9 88.2 311 95m-7 217v30.1L217.9 256l86.1-86.1V200c0 13.3 10.7 24 24 24h136v64H328c-6.4 0-12.5 2.5-17 7s-7 10.6-7 17M168 432H96c-26.5 0-48-21.5-48-48V128c0-26.5 21.5-48 48-48h72c13.3 0 24-10.7 24-24s-10.7-24-24-24H96C43 32 0 75 0 128v256c0 53 43 96 96 96h72c13.3 0 24-10.7 24-24s-10.7-24-24-24"})
);

export default LanLeftToBracketRegular;
