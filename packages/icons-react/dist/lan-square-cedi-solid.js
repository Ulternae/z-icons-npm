import React from 'react';

export const LanSquareCediSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm184 88v10.2c24.5 4.6 46.5 16.3 63.9 32.7 9.6 9.1 10.1 24.3 1 33.9s-24.3 10.1-33.9 1c-8.7-8.2-19.2-14.5-30.9-18.2v152.7c11.7-3.7 22.2-9.9 30.9-18.2 9.6-9.1 24.8-8.7 33.9 1s8.7 24.8-1 33.9c-17.4 16.4-39.4 28-63.9 32.7v10.2c0 13.3-10.7 24-24 24s-24-10.7-24-24v-10.2C140.8 370.5 96 318.5 96 256s44.8-114.5 104-125.8V120c0-13.3 10.7-24 24-24s24 10.7 24 24M144 256c0 35.8 23.5 66.1 56 76.3V179.6c-32.5 10.2-56 40.5-56 76.3z"})
);

export default LanSquareCediSolid;
