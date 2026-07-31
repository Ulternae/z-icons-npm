import React from 'react';

export const LanPersonDotsFromLine = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M208 80a48 48 0 1 1 96 0 48 48 0 1 1-96 0m128 0a80 80 0 1 0-160 0 80 80 0 1 0 160 0M112 368c0-42.6 18.5-81 48-107.3V432h32V239c19.3-9.6 41-15 64-15s44.7 5.4 64 15v193h32V260.7c29.5 26.4 48 64.7 48 107.3v64h32v-64c0-97.2-78.8-176-176-176S80 270.8 80 368v64h32zm152 0a24 24 0 1 0-48 0 24 24 0 1 0 48 0M16 480c-8.8 0-16 7.2-16 16s7.2 16 16 16h480c8.8 0 16-7.2 16-16s-7.2-16-16-16zm104-288a24 24 0 1 0-48 0 24 24 0 1 0 48 0m360 88a24 24 0 1 0 0-48 24 24 0 1 0 0 48"})
);

export default LanPersonDotsFromLine;
