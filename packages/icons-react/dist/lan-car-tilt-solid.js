import React from 'react';

export const LanCarTiltSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"m151 136.2 152.1-40.8c6.4-1.7 13.3.7 17.2 6.2l43.2 60.5-231.5 62 7.2-74c.6-6.6 5.3-12.2 11.8-13.9M65.5 246.9l-.3 3.6A63.96 63.96 0 0 0 48 313c4.1 15.5 12.4 46.4 24.8 92.7l8.2 30.8c1.2 4.3 3.1 8.2 5.7 11.5H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h512c17.7 0 32-14.3 32-32s-14.3-32-32-32H148.7c8.7-7.8 12.9-20.1 9.6-32.2l-8.3-30.9 278.2-74.5 8.3 30.9c4.6 17.1 22.1 27.2 39.2 22.6l15.5-4.1c17.1-4.6 27.2-22.1 22.6-39.2-4.1-15.5-12.4-46.4-24.8-92.7l-8.3-30.9c-6.2-23.2-24.4-40-46.1-45.5l-2.1-2.9-60.2-84.2c-19.4-27.2-53.6-39.4-85.8-30.8L134.4 74.4c-32.2 8.6-55.7 36.3-58.9 69.5zm71 25.7a32 32 0 1 1 16.6 61.8 32 32 0 1 1-16.6-61.8m224.6-27.1A32 32 0 1 1 423 229a32 32 0 1 1-61.8 16.5z"})
);

export default LanCarTiltSolid;
