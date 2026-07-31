import React from 'react';

export const LanBreadSliceSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 432V256c-35.3 0-64-28.7-64-64 0-216.5 512-216.5 512 0 0 35.3-28.7 64-64 64v176c0 26.5-21.5 48-48 48H112c-26.5 0-48-21.5-48-48"})
);

export default LanBreadSliceSolid;
