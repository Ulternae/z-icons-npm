import React from 'react';

export const LanSignHangingRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M88 0c13.3 0 24 10.7 24 24v40h376c13.3 0 24 10.7 24 24s-10.7 24-24 24H112v376c0 13.3-10.7 24-24 24s-24-10.7-24-24V112H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h40V24C64 10.7 74.7 0 88 0m120 336h224V208H208zm-48-144c0-17.7 14.3-32 32-32h256c17.7 0 32 14.3 32 32v160c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32z"})
);

export default LanSignHangingRegular;
