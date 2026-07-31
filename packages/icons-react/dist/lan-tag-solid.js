import React from 'react';

export const LanTagSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M32.5 96v149.5c0 17 6.7 33.3 18.7 45.3l192 192c25 25 65.5 25 90.5 0l149.5-149.5c25-25 25-65.5 0-90.5l-192-192C279.2 38.7 263 32 246 32H96.5c-35.3 0-64 28.7-64 64m112 16a32 32 0 1 1 0 64 32 32 0 1 1 0-64"})
);

export default LanTagSolid;
