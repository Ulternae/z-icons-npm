import React from 'react';

export const LanLinkSimpleSlashRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -31.95 576 576.1',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L485 419.3c54.7-33.9 91-94.4 91-163.3 0-106-86-192-192-192h-40c-13.3 0-24 10.7-24 24s10.7 24 24 24h40c79.5 0 144 64.5 144 144 0 55.8-31.7 104.1-78.1 128.1L345.8 280H392c13.3 0 24-10.7 24-24s-10.7-24-24-24h-94.2L178.4 112.6q6.75-.6 13.5-.6h40c13.3 0 24-10.7 24-24s-10.7-24-24-24h-40c-18.9 0-37.1 2.7-54.4 7.8zm46.3 182-34-34C20.3 157.7 0 204.5 0 256c0 106 86 192 192 192h40c13.3 0 24-10.7 24-24s-10.7-24-24-24h-40c-79.5 0-144-64.5-144-144 0-38.3 14.9-73.1 39.3-98.9"})
);

export default LanLinkSimpleSlashRegular;
