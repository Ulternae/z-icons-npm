import React from 'react';

export const LanVanSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M0 128c0-35.3 28.7-64 64-64h368c20.1 0 39.1 9.5 51.2 25.6l80 106.7c8.3 11.1 12.8 24.6 12.8 38.4V336c0 35.3-28.7 64-64 64h-.4c-4 44.9-41.7 80-87.6 80s-83.6-35.1-87.6-80h-96.7c-4 44.9-41.7 80-87.6 80s-83.6-35.1-87.6-80h-.4c-35.3 0-64-28.7-64-64zm384 96h120l-72-96h-48zm80 168a40 40 0 1 0-80 0 40 40 0 1 0 80 0m-312 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80"})
);

export default LanVanSolid;
