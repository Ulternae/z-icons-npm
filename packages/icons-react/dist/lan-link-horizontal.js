import React from 'react';

export const LanLinkHorizontal = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M304 288c61.9 0 112-50.1 112-112S365.9 64 304 64H144C82.1 64 32 114.1 32 176c0 42.3 23.5 79.2 58.2 98.2-3.5 10.3-6.2 21-7.9 32C33.6 283 0 233.5 0 176 0 96.5 64.5 32 144 32h160c79.5 0 144 64.5 144 144s-64.5 144-144 144h-64c-8.8 0-16-7.2-16-16s7.2-16 16-16zm240 48c0-42.3-23.5-79.2-58.2-98.2 3.5-10.3 6.1-20.9 7.8-31.9 48.7 23.1 82.3 72.7 82.3 130.2 0 79.5-64.5 144-144 144h-160c-79.5 0-144-64.5-144-144s64.5-144 144-144h64c8.8 0 16 7.2 16 16s-7.2 16-16 16h-64c-61.9 0-112 50.1-112 112s50.1 112 112 112h160c61.9 0 112-50.1 112-112z"})
);

export default LanLinkHorizontal;
