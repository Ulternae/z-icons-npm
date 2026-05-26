import React from 'react';

export const LanDiamond = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M0 256c0 15.4 6.1 30.1 17 41l198 198c10.9 10.9 25.6 17 41 17s30.1-6.1 41-17l198-198c10.9-10.9 17-25.6 17-41s-6.1-30.1-17-41L297 17C286.1 6.1 271.4 0 256 0s-30.1 6.1-41 17L17 215C6.1 225.9 0 240.6 0 256M256 32c6.9 0 13.5 2.7 18.3 7.6l198.1 198.1c4.9 4.9 7.6 11.5 7.6 18.3s-2.7 13.5-7.6 18.3L274.3 472.4c-4.9 4.9-11.5 7.6-18.3 7.6s-13.5-2.7-18.3-7.6L39.6 274.3c-4.9-4.8-7.6-11.4-7.6-18.3s2.7-13.5 7.6-18.3L237.7 39.6c4.9-4.9 11.5-7.6 18.3-7.6"})
);

export default LanDiamond;
