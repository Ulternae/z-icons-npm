import React from 'react';

export const LanDeleteRightThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M80 128c0-26.5 21.5-48 48-48h306.7c12.7 0 24.9 5.1 33.9 14.1l150.7 150.6c3 3 4.7 7.1 4.7 11.3s-1.7 8.3-4.7 11.3L468.7 417.9c-9 9-21.2 14.1-33.9 14.1H128c-26.5 0-48-21.5-48-48zm550.6 105.4L480 82.7c-12-12-28.3-18.7-45.3-18.7H128c-35.3 0-64 28.7-64 64v256c0 35.3 28.7 64 64 64h306.7c17 0 33.3-6.7 45.3-18.7l150.6-150.7c6-6 9.4-14.1 9.4-22.6s-3.4-16.6-9.4-22.6m-407.8 76.4c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0l53.8-53.8 53.8 53.8c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L299.2 256l53.8-53.8c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0l-53.8 53.8-53.8-53.8c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l53.8 53.8z"})
);

export default LanDeleteRightThin;
