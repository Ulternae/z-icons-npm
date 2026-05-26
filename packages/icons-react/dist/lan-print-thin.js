import React from 'react';

export const LanPrintThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M416 144h16v-37.5c0-17-6.7-33.3-18.7-45.3l-42.6-42.5C358.7 6.7 342.5 0 325.5 0H144c-35.3 0-64 28.7-64 64v80h16V64c0-26.5 21.5-48 48-48h181.5c12.7 0 24.9 5.1 33.9 14.1l42.5 42.5c9 9 14.1 21.2 14.1 33.9zm32 64c26.5 0 48 21.5 48 48v128c0 8.8-7.2 16-16 16h-48v-32c0-17.7-14.3-32-32-32H112c-17.7 0-32 14.3-32 32v32H32c-8.8 0-16-7.2-16-16V256c0-26.5 21.5-48 48-48zm-16 208h48c17.7 0 32-14.3 32-32V256c0-35.3-28.7-64-64-64H64c-35.3 0-64 28.7-64 64v128c0 17.7 14.3 32 32 32h48v64c0 17.7 14.3 32 32 32h288c17.7 0 32-14.3 32-32zm-320-64h288c8.8 0 16 7.2 16 16v112c0 8.8-7.2 16-16 16H112c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16m324-72a12 12 0 1 0 0-24 12 12 0 1 0 0 24"})
);

export default LanPrintThin;
