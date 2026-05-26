import React from 'react';

export const LanPotFoodSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M112 24c0 26.5 10.5 38.7 25.9 56.1l.4.4C154.8 99.1 176 122.9 176 168c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-26.5-10.5-38.7-25.9-56.1l-.4-.4C85.2 93 64 69.1 64 24 64 10.7 74.7 0 88 0s24 10.7 24 24m112 0c0 26.5 10.5 38.7 25.9 56.1l.4.4C266.8 99.1 288 122.9 288 168c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-26.5-10.5-38.7-25.9-56.1l-.4-.4C197.2 93 176 69.1 176 24c0-13.3 10.7-24 24-24s24 10.7 24 24m208 88c50.7 0 93.6 33.7 107.4 80H324.7c13.8-46.3 56.6-80 107.4-80zM77.7 320H48c-17.7 0-32-14.3-32-32s14.3-32 32-32h17.9c-.2-17.5 14-32 31.7-32h444.8c17.7 0 31.9 14.5 31.7 32H592c17.7 0 32 14.3 32 32s-14.3 32-32 32h-29.7c-20.6 64-66.1 116.7-124.7 147.2l-1.2 9.7c-2.5 20-19.5 35-39.7 35H243.3c-20.2 0-37.2-15-39.7-35l-1.2-9.7C143.8 436.7 98.3 384 77.7 320"})
);

export default LanPotFoodSolid;
