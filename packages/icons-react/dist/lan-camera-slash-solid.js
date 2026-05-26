import React from 'react';

export const LanCameraSlashSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-42.8-42.8c11-11.5 17.8-27.1 17.8-44.3v-256c0-35.3-28.7-64-64-64h-74.7l-10.4-31.2C388.4 45.2 370.1 32 349.4 32H226.6c-20.7 0-39 13.2-45.5 32.8L170.7 96h-8.9zm220.5 220.6c8.4-2.4 17.3-3.7 26.5-3.7 53 0 96 43 96 96 0 9.2-1.3 18.1-3.7 26.5zM192 288c0-8 1-15.9 2.9-23.3l-147-147C38 129 32 143.8 32 160v256c0 35.3 28.7 64 64 64h314.2l-98.9-98.9C303.8 383 296 384 288 384c-53 0-96-43-96-96"})
);

export default LanCameraSlashSolid;
