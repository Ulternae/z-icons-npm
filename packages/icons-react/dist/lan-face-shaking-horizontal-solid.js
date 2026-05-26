import React from 'react';

export const LanFaceShakingHorizontalSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M472 288h80c33.4 0 64-12 87.6-32-4 44.9-41.7 80-87.6 80h-80c-13.3 0-24 10.7-24 24s10.7 24 24 24h37.8c-44.3 76.5-127 128-221.8 128-141.4 0-256-114.6-256-256S146.6 0 288 0c119.3 0 219.5 81.6 247.9 192H552c22.1 0 40-17.9 40-40s-17.9-40-40-40c-13.3 0-24-10.7-24-24s10.7-24 24-24c48.6 0 88 39.4 88 88s-39.4 88-88 88h-80c-13.3 0-24 10.7-24 24s10.7 24 24 24m-340.1 28.6c-10.7 7.8-13.1 22.8-5.3 33.5C155.7 390 202.8 416 256 416s100.3-26 129.4-65.9c7.8-10.7 5.4-25.7-5.3-33.5s-25.7-5.4-33.5 5.3c-20.4 28-53.4 46.1-90.6 46.1s-70.2-18.1-90.6-46.1c-7.8-10.7-22.8-13.1-33.5-5.3M148 216c0-11 9-20 20-20h16c11 0 20 9 20 20s9 20 20 20 20-9 20-20c0-33.1-26.9-60-60-60h-16c-33.1 0-60 26.9-60 60 0 11 9 20 20 20s20-9 20-20m180-20h16c11 0 20 9 20 20s9 20 20 20 20-9 20-20c0-33.1-26.9-60-60-60h-16c-33.1 0-60 26.9-60 60 0 11 9 20 20 20s20-9 20-20 9-20 20-20"})
);

export default LanFaceShakingHorizontalSolid;
