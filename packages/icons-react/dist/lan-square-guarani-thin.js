import React from 'react';

export const LanSquareGuaraniThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 48c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48V96c0-26.5-21.5-48-48-48zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm216 24c0-4.4 3.6-8 8-8s8 3.6 8 8v16.3c29.5 1.9 56.1 14.6 76 34 3.2 3.1 3.2 8.2.1 11.3s-8.2 3.2-11.3.1c-17-16.7-39.6-27.5-64.8-29.4V248h104c4.4 0 8 3.6 8 8 0 63.6-49.5 115.6-112 119.7V392c0 4.4-3.6 8-8 8s-8-3.6-8-8v-16.3c-62.5-4.1-112-56.2-112-119.7s49.5-115.6 112-119.7zm-96 136c0 54.7 42.3 99.6 96 103.7V152.3c-53.7 4.1-96 49-96 103.7m207.7 8H232v95.7c51.1-3.9 91.8-44.6 95.7-95.7"})
);

export default LanSquareGuaraniThin;
