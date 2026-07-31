import React from 'react';

export const LanCircleWifiSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512M127.5 241.3c-9.8 8.9-25 8.1-33.9-1.8s-8.1-25 1.8-33.9C137.9 167.3 194.3 144 256 144s118.1 23.3 160.6 61.6c9.8 8.9 10.6 24 1.8 33.9s-24 10.6-33.9 1.8c-34-30.7-79-49.3-128.5-49.3s-94.4 18.6-128.5 49.3M256 336a32 32 0 1 1 0 64 32 32 0 1 1 0-64m0-48c-22.7 0-43.4 8.6-59 22.7-9.8 8.9-25 8.1-33.9-1.7s-8.1-25 1.7-33.9c24.1-21.8 56.1-35.1 91.2-35.1s67.1 13.3 91.2 35.1c9.8 8.9 10.6 24.1 1.7 33.9s-24.1 10.6-33.9 1.7c-15.6-14.1-36.3-22.7-59-22.7"})
);

export default LanCircleWifiSolid;
