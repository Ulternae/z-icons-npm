import React from 'react';

export const LanNfcSymbolThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M137.9 34.3c-2.6-2.5-6.5-3-9.6-1.2C51.6 77.1 0 161.7 0 256s51.6 178.9 128.3 222.9c3.8 2.2 8.7.9 10.9-3s.9-8.7-3-10.9C64.4 423.8 16 344.5 16 256c0-86.3 46.1-163.9 115-206l183.4 179.7c3.2 3.1 8.2 3 11.3-.1s3-8.2-.1-11.3zm239 443.5c2.6 2.5 6.5 3 9.6 1.2 75.4-44.1 126.1-128.7 126.1-222.9s-50.7-178.9-126.1-223c-3.8-2.2-8.7-.9-10.9 2.9s-.9 8.7 2.9 10.9C449 88.2 496.6 167.5 496.6 256c0 86.3-45.3 163.9-113 206l-186-179.7c-3.2-3.1-8.2-3-11.3.2s-3 8.2.2 11.3z"})
);

export default LanNfcSymbolThin;
