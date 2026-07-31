import React from 'react';

export const LanPaintBrushRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M498.4 0c-17.3 0-34.1 5.8-47.8 16.4L246.1 176.3c-25.3 19.7-41.4 48.6-45.2 80-2.9-.2-5.9-.3-8.9-.3-70.7 0-128 57.3-128 128 0 8.6.9 17.1 2.5 25.2 3.6 18.1-8.5 38.8-27 38.8H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h160c70.7 0 128-57.3 128-128 0-3-.1-5.9-.3-8.9 31.4-3.8 60.3-20 80-45.2l159.9-204.6c10.6-13.6 16.4-30.4 16.4-47.7C576 34.7 541.3 0 498.4 0M307.1 328c-12.5-25.7-33.4-46.6-59.1-59.1.6-21.4 10.7-41.5 27.6-54.8L480.2 54.3c5.2-4.1 11.6-6.3 18.2-6.3 16.3 0 29.6 13.2 29.6 29.6 0 6.6-2.2 13-6.3 18.2L361.9 300.3c-13.2 17-33.4 27.1-54.8 27.6zM272 384c0 44.2-35.8 80-80 80H99.9c.5-.7 1-1.5 1.5-2.2 11.5-17.5 16.6-39.9 12.2-62-1-5.1-1.6-10.4-1.6-15.8 0-44.2 35.8-80 80-80s80 35.8 80 80"})
);

export default LanPaintBrushRegular;
