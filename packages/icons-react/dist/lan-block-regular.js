import React from 'react';

export const LanBlockRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M384 80c8.8 0 16 7.2 16 16v320c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16zM64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm48 88a24 24 0 1 0-48 0 24 24 0 1 0 48 0m248 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48M112 392a24 24 0 1 0-48 0 24 24 0 1 0 48 0m248 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48"})
);

export default LanBlockRegular;
