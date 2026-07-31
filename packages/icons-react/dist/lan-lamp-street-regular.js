import React from 'react';

export const LanLampStreetRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M172 48c-68.5 0-124 55.5-124 124v316c0 13.3-10.7 24-24 24S0 501.3 0 488V172C0 77 77 0 172 0c91.4 0 166.2 71.4 171.7 161.4 84.3 10.4 151.8 75.5 165.7 158.7 2.9 17.5-11.7 31.9-29.4 31.9h-73.5c-7.5 41-43.4 72-86.5 72s-79-31-86.5-72H160c-17.7 0-32.3-14.4-29.4-31.9 13.9-83 80.9-147.9 164.9-158.6C290.2 97.9 236.9 48 171.9 48zm111.3 304c6.2 14.1 20.3 24 36.7 24s30.5-9.9 36.7-24h-73.3zm172.5-48c-19.8-55.9-73.1-96-135.8-96s-116.1 40.1-135.8 96z"})
);

export default LanLampStreetRegular;
