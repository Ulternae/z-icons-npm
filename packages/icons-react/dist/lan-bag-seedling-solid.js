import React from 'react';

export const LanBagSeedlingSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M32 64 6.6 38.6c-4.2-4.2-6.6-10-6.6-16C0 10.1 10.1 0 22.6 0h402.8C437.9 0 448 10.1 448 22.6c0 6-2.4 11.8-6.6 16L416 64l18.6 74.5c8.9 35.5 13.4 72 13.4 108.7v17.7c0 36.6-4.5 73.1-13.4 108.7L416 448l25.4 25.4c4.2 4.2 6.6 10 6.6 16 0 12.5-10.1 22.6-22.6 22.6H22.6C10.1 512 0 501.9 0 489.4c0-6 2.4-11.8 6.6-16L32 448l-18.6-74.5C4.5 338 0 301.5 0 264.8v-17.7c0-36.6 4.5-73.1 13.4-108.6zm80 96c-8.8 0-16 7.2-16 16 0 59.2 45.9 107.6 104 111.7V328c0 13.3 10.7 24 24 24s24-10.7 24-24v-40.3c58.1-4.1 104-52.6 104-111.7 0-8.8-7.2-16-16-16h-2c-47.3 0-88.4 26-110 64.5C202.4 186 161.3 160 114 160z"})
);

export default LanBagSeedlingSolid;
