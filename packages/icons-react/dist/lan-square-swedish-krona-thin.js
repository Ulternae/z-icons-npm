import React from 'react';

export const LanSquareSwedishKronaThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 48c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48V96c0-26.5-21.5-48-48-48zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm120 48c4.4 0 8 3.6 8 8v142.9l82.9-69.1c3.4-2.8 8.4-2.4 11.3 1s2.4 8.4-1 11.3l-46 38.3 48 96c2 4 .4 8.8-3.6 10.7s-8.8.4-10.7-3.6L162.5 287 128 315.7V376c0 4.4-3.6 8-8 8s-8-3.6-8-8V152c0-4.4 3.6-8 8-8m182.9 122.4c-9.5 8.2-14.9 20-14.9 32.5V376c0 4.4-3.6 8-8 8s-8-3.6-8-8V248c0-4.4 3.6-8 8-8s8 3.6 8 8v10.6c1.4-1.5 2.9-2.9 4.4-4.3 10.7-9.2 24.3-14.3 38.5-14.3H344c4.4 0 8 3.6 8 8s-3.6 8-8 8h-13.1c-10.3 0-20.2 3.7-28 10.4"})
);

export default LanSquareSwedishKronaThin;
