import React from 'react';

export const LanFlowerTulipSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32 448 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M224-32c7.5 0 14.5 3.5 19 9.4l63.3 82.3L343 23c6.9-6.9 17.2-8.9 26.2-5.2S384 30.3 384 40v88c0 70.7-57.3 128-128 128v138.8c31.8-45.3 84.5-74.8 144-74.8h18.5c16.3 0 29.5 13.2 29.5 29.5 0 89.7-72.7 162.5-162.5 162.5H162.4C72.7 512 0 439.3 0 349.5 0 333.2 13.2 320 29.5 320H48c59.5 0 112.2 29.6 144 74.8V256c-70.7 0-128-57.3-128-128V40l.3-3.6c1.2-8.2 6.7-15.3 14.5-18.6 9-3.7 19.3-1.6 26.2 5.2l36.7 36.7L205-22.6l1.8-2.1c4.5-4.6 10.7-7.3 17.2-7.3"})
);

export default LanFlowerTulipSolid;
