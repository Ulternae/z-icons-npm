import React from 'react';

export const LanDryerThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M384 16c26.5 0 48 21.5 48 48v384c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48V64c0-26.5 21.5-48 48-48zM64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm160 432c-68 0-123.6-53-127.8-120H184c4.4 0 8-3.6 8-8s-3.6-8-8-8H96.2c4.1-67 59.7-120 127.8-120 70.7 0 128 57.3 128 128s-57.3 128-128 128m0 16a144 144 0 1 0 0-288 144 144 0 1 0 0 288M112 96a16 16 0 1 0-32 0 16 16 0 1 0 32 0m48 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32"})
);

export default LanDryerThin;
