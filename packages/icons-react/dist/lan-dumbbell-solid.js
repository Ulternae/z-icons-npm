import React from 'react';

export const LanDumbbellSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M96 112c0-26.5 21.5-48 48-48s48 21.5 48 48v112h256V112c0-26.5 21.5-48 48-48s48 21.5 48 48v16h16c26.5 0 48 21.5 48 48v48c17.7 0 32 14.3 32 32s-14.3 32-32 32v48c0 26.5-21.5 48-48 48h-16v16c0 26.5-21.5 48-48 48s-48-21.5-48-48V288H192v112c0 26.5-21.5 48-48 48s-48-21.5-48-48v-16H80c-26.5 0-48-21.5-48-48v-48c-17.7 0-32-14.3-32-32s14.3-32 32-32v-48c0-26.5 21.5-48 48-48h16z"})
);

export default LanDumbbellSolid;
