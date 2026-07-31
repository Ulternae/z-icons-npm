import React from 'react';

export const LanStopwatchThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M144.3 8c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8s-3.6 8-8 8h-64v63.8c59.6 2.2 112.7 29.5 149.3 71.6l29-29c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3L391.6 164c25.7 34.7 41 77.6 41 124.1 0 115.1-93.3 208.3-208.3 208.3S16 403.1 16 288c0-112.4 89-204 200.3-208.2V16h-64c-4.4 0-8-3.6-8-8M32.7 288a191.7 191.7 0 1 0 383.3 0 191.7 191.7 0 1 0-383.3 0m191.6-128c4.4 0 8 3.6 8 8v120c0 4.4-3.6 8-8 8s-8-3.6-8-8V168c0-4.4 3.6-8 8-8"})
);

export default LanStopwatchThin;
