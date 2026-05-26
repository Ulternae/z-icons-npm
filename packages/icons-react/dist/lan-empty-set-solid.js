import React from 'react';

export const LanEmptySetSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M502.6 54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L413 53.8C369.6 20.1 315.2 0 256 0 114.6 0 0 114.6 0 256c0 59.2 20.1 113.6 53.8 157L9.4 457.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L99 458.2c43.3 33.7 97.8 53.8 157 53.8 141.4 0 256-114.6 256-256 0-59.2-20.1-113.6-53.8-157zM367.2 99.5 99.5 367.2C77.1 335.9 64 297.5 64 256c0-106 86-192 192-192 41.5 0 79.9 13.1 111.2 35.5m-222.5 313 267.8-267.7C434.9 176.2 448 214.6 448 256c0 106-86 192-192 192-41.5 0-79.9-13.1-111.2-35.5z"})
);

export default LanEmptySetSolid;
