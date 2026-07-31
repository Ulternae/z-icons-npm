import React from 'react';

export const LanShredderThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M416 106.5V144h16v-37.5c0-17-6.7-33.3-18.7-45.3l-42.6-42.5C358.7 6.7 342.5 0 325.5 0H144c-35.3 0-64 28.7-64 64v80h16V64c0-26.5 21.5-48 48-48h181.5c12.7 0 24.9 5.1 33.9 14.1l42.5 42.5c9 9 14.1 21.2 14.1 33.9M64 208h384c26.5 0 48 21.5 48 48v128c0 8.8-7.2 16-16 16H32c-8.8 0-16-7.2-16-16V256c0-26.5 21.5-48 48-48m16 208v88c0 4.4 3.6 8 8 8s8-3.6 8-8v-88h64v88c0 4.4 3.6 8 8 8s8-3.6 8-8v-88h72v88c0 4.4 3.6 8 8 8s8-3.6 8-8v-88h72v88c0 4.4 3.6 8 8 8s8-3.6 8-8v-88h64v88c0 4.4 3.6 8 8 8s8-3.6 8-8v-88h48c17.7 0 32-14.3 32-32V256c0-35.3-28.7-64-64-64H64c-35.3 0-64 28.7-64 64v128c0 17.7 14.3 32 32 32zm368-148a12 12 0 1 0-24 0 12 12 0 1 0 24 0"})
);

export default LanShredderThin;
