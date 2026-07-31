import React from 'react';

export const LanLeftToBracketThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M178.3 261.7c-3.1-3.1-3.1-8.2 0-11.3l144-144c2.3-2.3 5.7-3 8.7-1.7 3 1.2 4.9 4.2 4.9 7.4v88c0 4.4 3.6 8 8 8h120c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32h-120c-4.4 0-8 3.6-8 8v88c0 3.2-1.9 6.2-4.9 7.4s-6.4.6-8.7-1.7l-144-144zM311 95 167 239c-9.4 9.4-9.4 24.6 0 33.9L311 417c6.9 6.9 17.2 8.9 26.2 5.2S352 409.7 352 400v-80h112c26.5 0 48-21.5 48-48v-32c0-26.5-21.5-48-48-48H352v-80c0-9.7-5.8-18.5-14.8-22.2S317.9 88.2 311 95M184 464H96c-44.2 0-80-35.8-80-80V128c0-44.2 35.8-80 80-80h88c4.4 0 8-3.6 8-8s-3.6-8-8-8H96C43 32 0 75 0 128v256c0 53 43 96 96 96h88c4.4 0 8-3.6 8-8s-3.6-8-8-8"})
);

export default LanLeftToBracketThin;
