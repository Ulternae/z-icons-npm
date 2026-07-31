import React from 'react';

export const LanBoxArchiveSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M0 64c0-17.7 14.3-32 32-32h448c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm32 112h448v240c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64zm152 64c-13.3 0-24 10.7-24 24s10.7 24 24 24h144c13.3 0 24-10.7 24-24s-10.7-24-24-24z"})
);

export default LanBoxArchiveSolid;
