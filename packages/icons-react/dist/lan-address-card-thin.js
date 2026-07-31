import React from 'react';

export const LanAddressCardThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M512 48c26.5 0 48 21.5 48 48v320c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48V96c0-26.5 21.5-48 48-48zM64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm80 160a48 48 0 1 1 96 0 48 48 0 1 1-96 0m112 0a64 64 0 1 0-128 0 64 64 0 1 0 128 0M96 360c0-30.9 25.1-56 56-56h80c30.9 0 56 25.1 56 56 0 4.4 3.6 8 8 8s8-3.6 8-8c0-39.8-32.2-72-72-72h-80c-39.8 0-72 32.2-72 72 0 4.4 3.6 8 8 8s8-3.6 8-8m248-200c-4.4 0-8 3.6-8 8s3.6 8 8 8h144c4.4 0 8-3.6 8-8s-3.6-8-8-8zm0 80c-4.4 0-8 3.6-8 8s3.6 8 8 8h144c4.4 0 8-3.6 8-8s-3.6-8-8-8z"})
);

export default LanAddressCardThin;
