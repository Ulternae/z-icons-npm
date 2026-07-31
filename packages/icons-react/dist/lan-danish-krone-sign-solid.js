import React from 'react';

export const LanDanishKroneSignSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M80 16c17.7 0 32 14.3 32 32v221.7l120.4-131.4c11.9-13 32.2-13.9 45.2-2s13.9 32.2 2 45.2l-97 105.8 99.6 142.3c10.1 14.5 6.6 34.4-7.9 44.6s-34.4 6.6-44.6-7.9l-91.4-130.6-26.3 28.7V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V48c0-17.7 14.3-32 32-32m316.8 233.6c-8.3 11.1-12.8 24.6-12.8 38.4v160c0 17.7-14.3 32-32 32s-32-14.3-32-32V192c0-17.7 14.3-32 32-32 13 0 24.2 7.7 29.2 18.8 19.9-12.2 42.9-18.8 66.8-18.8h16c17.7 0 32 14.3 32 32s-14.3 32-32 32h-16c-20.1 0-39.1 9.5-51.2 25.6M464 408a40 40 0 1 1 0 80 40 40 0 1 1 0-80"})
);

export default LanDanishKroneSignSolid;
