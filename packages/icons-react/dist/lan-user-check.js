import React from 'react';

export const LanUserCheck = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M304.5 304c97.2 0 176 78.8 176 176v16c0 8.8-7.2 16-16 16s-16-7.2-16-16v-16c0-79.5-64.5-144-144-144h-96c-79.5 0-144 64.5-144 144v16c0 8.8-7.2 16-16 16s-16-7.2-16-16v-16c0-97.2 78.8-176 176-176zm291.1-197.8c5.2-7.1 15.2-8.7 22.3-3.5s8.7 15.2 3.5 22.3L515.8 270.2c-2.8 3.8-7.1 6.2-11.8 6.5s-9.3-1.4-12.6-4.8L437 215.6c-6.1-6.4-6-16.5.4-22.6s16.5-5.9 22.6.4l41.2 42.6zM256.5 256a128 128 0 1 1 0-256 128 128 0 1 1 0 256m0-224a96 96 0 1 0 0 192 96 96 0 1 0 0-192"})
);

export default LanUserCheck;
