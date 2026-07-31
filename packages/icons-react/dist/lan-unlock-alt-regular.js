import React from 'react';

export const LanUnlockAltRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32 384 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M192 16c-44.2 0-80 35.8-80 80v64h208c35.3 0 64 28.7 64 64v224c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64V96c0-70.7 57.3-128 128-128 67.4 0 122.5 52 127.6 118.1 1 13.2-8.9 24.8-22.1 25.8s-24.8-8.9-25.8-22.1C268.6 48.5 234.1 16 192 16M48 224v224c0 8.8 7.2 16 16 16h256c8.8 0 16-7.2 16-16V224c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16m184 136h-80c-13.3 0-24-10.7-24-24s10.7-24 24-24h80c13.3 0 24 10.7 24 24s-10.7 24-24 24"})
);

export default LanUnlockAltRegular;
