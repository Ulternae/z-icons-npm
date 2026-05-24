import React from 'react';

export const BruTailwindCss = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M320 64c-85.3 0-138.7 42.7-160 128 32-42.7 69.3-58.7 112-48 24.3 6.1 41.7 23.8 61 43.3 31.4 31.8 67.7 68.7 147 68.7 85.3 0 138.7-42.7 160-128-32 42.7-69.3 58.7-112 48-24.3-6.1-41.7-23.8-61-43.3C435.6 100.9 399.3 64 320 64M160 256C74.7 256 21.3 298.7 0 384c32-42.7 69.3-58.7 112-48 24.3 6.1 41.7 23.8 61 43.3 31.4 31.8 67.7 68.7 147 68.7 85.3 0 138.7-42.7 160-128-32 42.7-69.3 58.7-112 48-24.3-6.1-41.7-23.8-61-43.3-31.4-31.8-67.7-68.7-147-68.7"})
);

export default BruTailwindCss;
