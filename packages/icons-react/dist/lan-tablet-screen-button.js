import React from 'react';

export const LanTabletScreenButton = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M32 448c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32v-96H32zm0-128h384V64c0-17.7-14.3-32-32-32H64c-17.7 0-32 14.3-32 32zM0 64C0 28.7 28.7 0 64 0h320c35.3 0 64 28.7 64 64v384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm224 328a24 24 0 1 1 0 48 24 24 0 1 1 0-48"})
);

export default LanTabletScreenButton;
