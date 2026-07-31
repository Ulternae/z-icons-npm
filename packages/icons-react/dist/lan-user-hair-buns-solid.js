import React from 'react';

export const LanUserHairBunsSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M304 128v16c0 44.2-35.8 80-80 80s-80-35.8-80-80v-16c0-5.5.6-10.8 1.6-16h6.4c31.7 0 59-18.4 72-45.1 13 26.7 40.3 45.1 72 45.1h6.4c1 5.2 1.6 10.5 1.6 16M84 192c7 0 13.7-1.6 19.6-4.6 17.8 49.3 65 84.6 120.4 84.6s102.7-35.3 120.4-84.6c5.9 2.9 12.5 4.6 19.6 4.6 24.3 0 44-19.7 44-44v-40c0-24.3-19.7-44-44-44-9.3 0-17.9 2.9-25 7.8C318.2 29.3 274.5 0 224 0s-94.2 29.3-115 71.8c-7.1-4.9-15.7-7.8-25-7.8-24.3 0-44 19.7-44 44v40c0 24.3 19.7 44 44 44m96.6 128C89.7 320 16 393.7 16 484.6c0 15.1 12.3 27.4 27.4 27.4h361.1c15.1 0 27.4-12.3 27.4-27.4 0-90.9-73.7-164.6-164.6-164.6h-86.9z"})
);

export default LanUserHairBunsSolid;
