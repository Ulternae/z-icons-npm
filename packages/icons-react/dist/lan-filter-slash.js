import React from 'react';

export const LanFilterSlash = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -31.85 576 575.9',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M27.3-27.2c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l544 544c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L353.9 299.4l180.7-180.8c9.2-9.2 11.9-22.9 6.9-34.9S524.9 64 512 64H118.5zM150.5 96H512L331.3 276.7zM224 301.3V416c0 8.5 3.4 16.6 9.4 22.6l64 64c9.2 9.2 22.9 11.9 34.9 6.9S352 492.9 352 480v-69.5l-32-32V480l-64-64V314.5l-32-32v18.7z"})
);

export default LanFilterSlash;
