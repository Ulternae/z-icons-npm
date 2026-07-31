import React from 'react';

export const LanTombstoneAltRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M368 192c0-79.5-64.5-144-144-144S80 112.5 80 192v272h288zM32 464V192C32 86 118 0 224 0s192 86 192 192v272h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24z"})
);

export default LanTombstoneAltRegular;
