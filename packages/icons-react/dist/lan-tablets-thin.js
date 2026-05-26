import React from 'react';

export const LanTabletsThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M368 272c-32.5 0-62.1-12.1-84.7-32L464 59.3c19.9 22.6 32 52.2 32 84.7 0 70.7-57.3 128-128 128M240 144c0-70.7 57.3-128 128-128 32.5 0 62.1 12.1 84.7 32L272 228.7c-19.9-22.6-32-52.2-32-84.7m128 144a144 144 0 1 0 0-288 144 144 0 1 0 0 288M144 496c-68 0-123.6-53-127.8-120h255.5C267.6 443 212 496 144 496M16.2 360C20.4 293 76 240 144 240s123.6 53 127.8 120zM144 512a144 144 0 1 0 0-288 144 144 0 1 0 0 288"})
);

export default LanTabletsThin;
