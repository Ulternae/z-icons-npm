import React from 'react';

export const LanTombstoneRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M368 464H80V192c0-79.5 64.5-144 144-144s144 64.5 144 144zM32 192v272h-8c-13.3 0-24 10.7-24 24s10.7 24 24 24h400c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8V192C416 86 330 0 224 0S32 86 32 192m216-40c0-13.3-10.7-24-24-24s-24 10.7-24 24v40h-48c-13.3 0-24 10.7-24 24s10.7 24 24 24h48v120c0 13.3 10.7 24 24 24s24-10.7 24-24V240h48c13.3 0 24-10.7 24-24s-10.7-24-24-24h-48z"})
);

export default LanTombstoneRegular;
