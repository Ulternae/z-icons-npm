import React from 'react';

export const LanTruckPlowSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M192 96v96h133.4l-57.6-96zm130.6-32.9L400 192h32c26.5 0 48 21.5 48 48v24h48v-80c0-48.6 39.4-88 88-88 13.3 0 24 10.7 24 24s-10.7 24-24 24c-22.1 0-40 17.9-40 40v208c0 22.1 17.9 40 40 40 13.3 0 24 10.7 24 24s-10.7 24-24 24c-48.6 0-88-39.4-88-88v-80h-48v80c0 48.6-39.4 88-88 88s-88-39.4-88-88c0-2.7.1-5.4.4-8h-96.7c.2 2.6.4 5.3.4 8 0 48.6-39.4 88-88 88s-88-39.4-88-88q0-5.4.6-10.5C13.7 375.1.1 357.1.1 336v-96c0-26.5 21.5-48 48-48h80V64c0-17.7 14.3-32 32-32h107.8c22.5 0 43.3 11.8 54.9 31.1zM160 392a40 40 0 1 0-80 0 40 40 0 1 0 80 0m232 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80"})
);

export default LanTruckPlowSolid;
