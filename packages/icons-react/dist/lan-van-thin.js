import React from 'react';

export const LanVanThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 80h304v88c0 35.3 28.7 64 64 64h128v104c0 26.5-21.5 48-48 48h-.4c-4-44.9-41.7-80-87.6-80s-83.6 35.1-87.6 80h-96.7c-4-44.9-41.7-80-87.6-80s-83.6 35.1-87.6 80h-.4c-26.5 0-48-21.5-48-48V128c0-26.5 21.5-48 48-48zm447.6 320h.4c35.3 0 64-28.7 64-64V223.1c0-11.7-4.3-23-12-31.8L470.7 85.7c-12.1-13.8-29.6-21.7-48-21.7H64C28.7 64 0 92.7 0 128v208c0 35.3 28.7 64 64 64h.4c4 44.9 41.7 80 87.6 80s83.6-35.1 87.6-80h96.7c4 44.9 41.7 80 87.6 80s83.6-35.1 87.6-80zM384 80h38.7c13.8 0 26.9 5.9 36 16.2L552 202c3.6 4 6 8.9 7.2 14H432c-26.5 0-48-21.5-48-48zm-32 312a72 72 0 1 1 144 0 72 72 0 1 1-144 0m-200-72a72 72 0 1 1 0 144 72 72 0 1 1 0-144"})
);

export default LanVanThin;
