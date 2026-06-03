import React from 'react';

export const LanRulerThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -18.3 576 548.525',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M537.2 165.5 197.8 504.9c-12.5 12.5-32.8 12.5-45.3 0L39.4 391.8c-12.5-12.5-12.5-32.8 0-45.3l33.9-33.9 73.5 73.5c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3l-73.5-73.5 56.6-56.6 50.9 50.9c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3l-50.9-50.9 50.9-50.9 73.5 73.5c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3l-73.5-73.5 50.9-50.9 50.9 50.9c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L276.9 109l56.6-56.6 73.5 73.5c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L344.8 41l34-33.9c12.5-12.5 32.8-12.5 45.3 0l113.1 113.1c12.5 12.5 12.5 32.8 0 45.3M67.7 295.6l-39.6 39.6c-18.7 18.7-18.7 49.1 0 67.9l113.1 113.1c18.7 18.7 49.1 18.7 67.9 0l339.4-339.4c18.7-18.7 18.7-49.1 0-67.9L435.4-4.2c-18.8-18.8-49.2-18.8-67.9 0C78 285.2 139.3 223.9 67.7 295.6"})
);

export default LanRulerThin;
