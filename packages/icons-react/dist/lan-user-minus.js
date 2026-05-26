import React from 'react';

export const LanUserMinus = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M304 304c97.2 0 176 78.8 176 176v16c0 8.8-7.2 16-16 16s-16-7.2-16-16v-16c0-79.5-64.5-144-144-144h-96c-79.5 0-144 64.5-144 144v16c0 8.8-7.2 16-16 16s-16-7.2-16-16v-16c0-97.2 78.8-176 176-176zm-48-48a128 128 0 1 1 0-256 128 128 0 1 1 0 256m0-224a96 96 0 1 0 0 192 96 96 0 1 0 0-192m352 128c8.8 0 16 7.2 16 16s-7.2 16-16 16H448c-8.8 0-16-7.2-16-16s7.2-16 16-16z"})
);

export default LanUserMinus;
