import React from 'react';

export const LanPillsThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M212 256H16v144c0 53 43 96 96 96 34.8 0 65.4-18.6 82.2-46.3 2.6 5.5 5.4 10.9 8.5 16.1-20.4 28-53.4 46.3-90.7 46.3-61.9 0-112-50.1-112-112V112C0 50.1 50.1 0 112 0s112 50.1 112 112v129q-6.3 7.2-12 15m-4-16V112c0-53-43-96-96-96s-96 43-96 96v128zm64 212.7L452.7 272c-22.6-19.9-52.2-32-84.7-32-70.7 0-128 57.3-128 128 0 32.5 12.1 62.1 32 84.7m11.3 11.3c22.6 19.9 52.2 32 84.7 32 70.7 0 128-57.3 128-128 0-32.5-12.1-62.1-32-84.7zM368 224a144 144 0 1 1 0 288 144 144 0 1 1 0-288"})
);

export default LanPillsThin;
