import React from 'react';

export const LanSquarePersonConfined = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 64c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm296 96c30.9 0 56 25.1 56 56v112c0 30.9-25.1 56-56 56-25.1 0-48.8-11.5-64.4-31.3l-53.5-68.2-52.2 91.4c-4.4 7.7-14.2 10.3-21.8 6s-10.3-14.2-6-21.8l64-112c2.6-4.6 7.4-7.6 12.7-8s10.5 1.9 13.8 6.1l51.4 65.4V248c0-30.9 25.1-56 56-56m24 168V248c0-13.3-10.7-24-24-24s-24 10.7-24 24v112c0 13.3 10.7 24 24 24s24-10.7 24-24m-88-208a24 24 0 1 0-48 0 24 24 0 1 0 48 0m-80 0a56 56 0 1 1 112 0 56 56 0 1 1-112 0"})
);

export default LanSquarePersonConfined;
