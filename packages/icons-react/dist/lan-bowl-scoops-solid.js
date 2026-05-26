import React from 'react';

export const LanBowlScoopsSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M224 208c0-29 11-55.5 29.2-75.4 20.2-22.2 49.3-36.3 81.7-36.6h1.1c61.9 0 112 50.1 112 112zM112 96h1.1c32.4.3 61.5 14.4 81.7 36.6-12 22.5-18.8 48.1-18.8 75.4H0C0 146.1 50.1 96 112 96m204.7-46.8c-35.9 4.3-68.2 20.5-92.7 44.5-24.5-24-56.8-40.2-92.7-44.5C151.4 19.5 185.4 0 224 0s72.6 19.5 92.7 49.2M0 272c0-8.8 7.2-16 16-16h416c8.8 0 16 7.2 16 16v16c0 70.7-57.3 128-128 128h-35.2l46 57.5c3.4 4.2 5.2 9.4 5.2 14.8 0 13.1-10.6 23.7-23.7 23.7H135.7c-13.1 0-23.7-10.6-23.7-23.7 0-5.4 1.8-10.6 5.2-14.8l46-57.5H128C57.3 416 0 358.7 0 288z"})
);

export default LanBowlScoopsSolid;
