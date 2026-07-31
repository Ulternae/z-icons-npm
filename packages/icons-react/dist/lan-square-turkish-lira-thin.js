import React from 'react';

export const LanSquareTurkishLiraThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 48c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48V96c0-26.5-21.5-48-48-48zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm168 32c4.4 0 8 3.6 8 8v79.6l93.5-31.2c4.2-1.4 8.7.9 10.1 5.1s-.9 8.7-5.1 10.1L176 232.4v47.1l93.5-31.2c4.2-1.4 8.7.9 10.1 5.1s-.9 8.7-5.1 10.1L176 296.3v71.6h56c44.2 0 80-35.8 80-80 0-4.4 3.6-8 8-8s8 3.6 8 8c0 53-43 96-96 96h-64c-4.4 0-8-3.6-8-8v-74.2l-29.5 9.8c-4.2 1.4-8.7-.9-10.1-5.1s.9-8.7 5.1-10.1l34.5-11.5v-47.1l-29.5 9.8c-4.2 1.4-8.7-.9-10.1-5.1s.9-8.7 5.1-10.1l34.5-11.5v-84.9c0-4.4 3.6-8 8-8z"})
);

export default LanSquareTurkishLiraThin;
