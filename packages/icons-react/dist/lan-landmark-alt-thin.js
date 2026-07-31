import React from 'react';

export const LanLandmarkAltThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 0c4.4 0 8 3.6 8 8v24.2c102.3 4.2 184 88.5 184 191.8h24c4.4 0 8 3.6 8 8s-3.6 8-8 8h-24v176h24c4.4 0 8 3.6 8 8s-3.6 8-8 8H40c-4.4 0-8-3.6-8-8s3.6-8 8-8h24V240H40c-4.4 0-8-3.6-8-8s3.6-8 8-8h24c0-103.4 81.7-187.6 184-191.8V8c0-4.4 3.6-8 8-8M80 224h352c0-97.2-78.8-176-176-176S80 126.8 80 224m0 16v176h104V240zm120 0v176h112V240zm128 0v176h104V240zM0 504c0-4.4 3.6-8 8-8h496c4.4 0 8 3.6 8 8s-3.6 8-8 8H8c-4.4 0-8-3.6-8-8"})
);

export default LanLandmarkAltThin;
