import React from 'react';

export const LanBlockSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm96 8a24 24 0 1 0-48 0 24 24 0 1 0 48 0m280 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48M96 408a24 24 0 1 0-48 0 24 24 0 1 0 48 0m280 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48"})
);

export default LanBlockSolid;
