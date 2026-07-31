import React from 'react';

export const LanLeftFromDottedLine = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M7 239c-9.4 9.4-9.4 24.6 0 33.9l144 144c6.9 6.9 17.2 8.9 26.2 5.2S192 409.7 192 400v-80h144c26.5 0 48-21.5 48-48v-32c0-26.5-21.5-48-48-48H192v-80c0-9.7-5.8-18.5-14.8-22.2S157.9 88.2 151 95zm249-15h80c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16 7.2-16 16v76.7L35.3 256 160 131.3V208c0 8.8 7.2 16 16 16zm208 200a24 24 0 1 0 48 0 24 24 0 1 0-48 0m0-112a24 24 0 1 0 48 0 24 24 0 1 0-48 0m24-88a24 24 0 1 0 0-48 24 24 0 1 0 0 48M464 88a24 24 0 1 0 48 0 24 24 0 1 0-48 0"})
);

export default LanLeftFromDottedLine;
