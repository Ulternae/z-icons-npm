import React from 'react';

export const LanBowlShavedIceSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M416 192c0 5.4-.2 10.7-.7 16H32.7c-.4-5.3-.7-10.6-.7-16C32 86 118 0 224 0s192 86 192 192M0 272c0-8.8 7.2-16 16-16h416c8.8 0 16 7.2 16 16v16c0 70.7-57.3 128-128 128h-35.2l46 57.5c3.4 4.2 5.2 9.4 5.2 14.8 0 13.1-10.6 23.7-23.7 23.7H135.7c-13.1 0-23.7-10.6-23.7-23.7 0-5.4 1.8-10.6 5.2-14.8l46-57.5H128C57.3 416 0 358.7 0 288z"})
);

export default LanBowlShavedIceSolid;
