import React from 'react';

export const BruWirsindhandwerk = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M50.772 479.812h83.36V367.847l-83.36 47.01Zm329.046 0h82.35v-64.956l-82.35-47.009Zm.006-448v219.756l-123.648-72.382-121.672 72.382V31.812H50.772v360.794l205.404-122.287 205.993 122.287V31.812Z"})
);

export default BruWirsindhandwerk;
