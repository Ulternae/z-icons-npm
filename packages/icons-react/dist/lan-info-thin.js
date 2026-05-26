import React from 'react';

export const LanInfoThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 192 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M96 32a16 16 0 1 1 0 32 16 16 0 1 1 0-32M0 168c0-4.4 3.6-8 8-8h64c17.7 0 32 14.3 32 32v272h80c4.4 0 8 3.6 8 8s-3.6 8-8 8H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h80V192c0-8.8-7.2-16-16-16H8c-4.4 0-8-3.6-8-8"})
);

export default LanInfoThin;
