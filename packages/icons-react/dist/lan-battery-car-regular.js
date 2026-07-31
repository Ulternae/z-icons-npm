import React from 'react';

export const LanBatteryCarRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M80 64c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32h96c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32h16c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128c0-35.3 28.7-64 64-64zm-16 48c-8.8 0-16 7.2-16 16v256c0 8.8 7.2 16 16 16h384c8.8 0 16-7.2 16-16V128c0-8.8-7.2-16-16-16zm304 56c13.3 0 24 10.7 24 24v24h24c13.3 0 24 10.7 24 24s-10.7 24-24 24h-24v24c0 13.3-10.7 24-24 24s-24-10.7-24-24v-24h-24c-13.3 0-24-10.7-24-24s10.7-24 24-24h24v-24c0-13.3 10.7-24 24-24M96 216h96c13.3 0 24 10.7 24 24s-10.7 24-24 24H96c-13.3 0-24-10.7-24-24s10.7-24 24-24"})
);

export default LanBatteryCarRegular;
