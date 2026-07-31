import React from 'react';

export const LanBoltLightningSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M0 256 28.5 28c2-16 15.6-28 31.8-28h168.6c15 0 27.1 12.1 27.1 27.1 0 3.2-.6 6.5-1.7 9.5L208 160h139.3c20.2 0 36.7 16.4 36.7 36.7 0 7.4-2.2 14.6-6.4 20.7l-192.2 281c-5.9 8.6-15.6 13.7-25.9 13.7h-2.9c-15.7 0-28.5-12.8-28.5-28.5q0-3.45.9-6.9L176 288H32c-17.7 0-32-14.3-32-32"})
);

export default LanBoltLightningSolid;
