import React from 'react';

export const LanMartiniGlassEmptyRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M24 32c-9.7 0-18.5 5.8-22.2 14.8S.2 66.1 7 73l225 225v166.1h-80c-13.3 0-24 10.7-24 24s10.7 24 24 24h208c13.3 0 24-10.7 24-24s-10.7-24-24-24h-80V298L505 73c6.9-6.9 8.9-17.2 5.2-26.2S497.7 32 488 32zm232 222.1L81.9 80h348.2z"})
);

export default LanMartiniGlassEmptyRegular;
