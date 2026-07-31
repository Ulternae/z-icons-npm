import React from 'react';

export const LanLandmarkMagnifyingGlassSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M273.3 5.1 281 10c-25.5 29.5-41 67.9-41 110 0 32.3 9.1 62.4 24.9 88H224v208h64V237.6c13.8 14.1 30 25.7 48 34.3v144.2h64V287.9c2.6.1 5.3.2 8 .2 13.8 0 27.2-1.7 40-4.8v132.8l51.2 38.4c8.1 6 12.8 15.5 12.8 25.6 0 17.7-14.3 32-32 32L32 512c-17.7 0-32-14.3-32-32 0-10.1 4.7-19.6 12.8-25.6L64 416V208H32c-14.2 0-26.7-9.4-30.7-23s1.5-28.3 13.4-35.9l224-144c10.5-6.8 24.1-6.8 34.6 0M112 208v208h64V208zm296-15.9a72 72 0 1 0 0-144 72 72 0 1 0 0 144m0 48c-66.3 0-120-53.7-120-120S341.7.1 408 .1s120 53.7 120 120c0 24.5-7.3 47.2-19.9 66.2l60.9 60.8c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-60.8-60.9c-19 12.6-41.7 19.9-66.2 19.9z"})
);

export default LanLandmarkMagnifyingGlassSolid;
