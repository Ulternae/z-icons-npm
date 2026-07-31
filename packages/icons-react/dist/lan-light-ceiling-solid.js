import React from 'react';

export const LanLightCeilingSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256.2 0c17.7 0 32 14.3 32 32v130c115.8 14.4 207.6 106.3 222 222.1 2.2 17.5-12.4 31.9-30 31.9H374.9c-19 46.9-65 80-118.7 80s-99.7-33.1-118.7-80H32.2c-17.7 0-32.2-14.4-30-31.9 14.4-115.8 106.2-207.6 222-222.1V32c0-17.7 14.3-32 32-32m-64 416c14.6 19.4 37.8 32 64 32s49.4-12.6 64-32z"})
);

export default LanLightCeilingSolid;
