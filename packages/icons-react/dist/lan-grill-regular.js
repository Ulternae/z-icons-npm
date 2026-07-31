import React from 'react';

export const LanGrillRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M48 80h352v16c0 97.2-78.8 176-176 176S48 193.2 48 96zm-8-48C17.9 32 0 49.9 0 72v24c0 89.8 52.9 167.3 129.2 203l-23.1 53.8c-3.3-.5-6.7-.8-10.1-.8-35.3 0-64 28.7-64 64s28.7 64 64 64 64-28.7 64-64h156.7l21.2 49.5c5.2 12.2 19.3 17.8 31.5 12.6s17.8-19.3 12.6-31.5L318.8 299C395.1 263.3 448 185.8 448 96V72c0-22.1-17.9-40-40-40zm111.8 336 22.9-53.4c15.9 3.6 32.3 5.4 49.3 5.4s33.4-1.9 49.3-5.4l22.9 53.4zM72 416a24 24 0 1 1 48 0 24 24 0 1 1-48 0"})
);

export default LanGrillRegular;
