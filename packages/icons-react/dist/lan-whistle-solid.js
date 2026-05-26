import React from 'react';

export const LanWhistleSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M400 64c8.8 0 16 7.2 16 16 0 17.7 14.3 32 32 32s32-14.3 32-32c0-8.8 7.2-16 16-16h112c17.7 0 32 14.3 32 32v70.3c0 15-10.4 28-25.1 31.2l-201.1 44.7c1.4 9.7 2.2 19.6 2.2 29.8 0 114.9-93.1 208-208 208S0 386.9 0 272 93.1 64 208 64zM208 192a80 80 0 1 0 0 160 80 80 0 1 0 0-160"})
);

export default LanWhistleSolid;
