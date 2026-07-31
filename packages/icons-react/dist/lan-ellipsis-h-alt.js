import React from 'react';

export const LanEllipsisHAlt = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M48 256a32 32 0 1 0 64 0 32 32 0 1 0-64 0m96 0a64 64 0 1 1-128 0 64 64 0 1 1 128 0m112-32a32 32 0 1 0 0 64 32 32 0 1 0 0-64m0 96a64 64 0 1 1 0-128 64 64 0 1 1 0 128m176-96a32 32 0 1 0 0 64 32 32 0 1 0 0-64m0 96a64 64 0 1 1 0-128 64 64 0 1 1 0 128"})
);

export default LanEllipsisHAlt;
