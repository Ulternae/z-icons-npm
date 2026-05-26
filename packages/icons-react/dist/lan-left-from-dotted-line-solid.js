import React from 'react';

export const LanLeftFromDottedLineSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M7 239c-9.4 9.4-9.4 24.6 0 33.9L151 417c6.9 6.9 17.2 8.9 26.2 5.2S192 409.7 192 400v-80h144c26.5 0 48-21.5 48-48v-32c0-26.5-21.5-48-48-48H192v-80c0-9.7-5.8-18.5-14.8-22.2S157.9 88.2 151 95zm473 209a32 32 0 1 0 0-64 32 32 0 1 0 0 64m-32-138.7a32 32 0 1 0 64 0 32 32 0 1 0-64 0m32-74.7a32 32 0 1 0 0-64 32 32 0 1 0 0 64M448 96a32 32 0 1 0 64 0 32 32 0 1 0-64 0"})
);

export default LanLeftFromDottedLineSolid;
