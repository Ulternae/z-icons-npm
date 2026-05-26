import React from 'react';

export const LanInfoRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 192 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 32a32 32 0 1 1 64 0 32 32 0 1 1-64 0M0 184c0-13.3 10.7-24 24-24h64c17.7 0 32 14.3 32 32v272h48c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h48V208H24c-13.3 0-24-10.7-24-24"})
);

export default LanInfoRegular;
