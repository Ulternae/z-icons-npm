import React from 'react';

export const LanCircleHalfHorizontalThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M2.2 287.9C0 270.4 14.6 256 32.3 256h448c17.7 0 32.2 14.4 30 31.9C494.6 414.2 386.8 512 256.3 512S17.9 414.2 2.2 287.9m15.9-2C32.8 404.4 133.9 496 256.3 496s223.4-91.6 238.2-210c.8-6.7-4.7-14-14.2-14h-448c-9.4 0-15 7.3-14.2 14z"})
);

export default LanCircleHalfHorizontalThin;
