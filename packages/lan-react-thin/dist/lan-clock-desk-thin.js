import React from 'react';

export function LanClockDeskThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M16 224a208 208 0 1 1 416 0 208 208 0 1 1-416 0m416 83.3V456c0 22.1-17.9 40-40 40H56c-22.1 0-40-17.9-40-40V307.3C49.1 389.8 129.7 448 224 448s174.9-58.2 208-140.7M0 224v232c0 30.9 25.1 56 56 56h336c30.9 0 56-25.1 56-56V224C448 100.3 347.7 0 224 0S0 100.3 0 224M224 96c-4.4 0-8 3.6-8 8v120c0 2.1.8 4.2 2.3 5.7l56 56c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L232 220.7V104c0-4.4-3.6-8-8-8"})
  );
}

export default LanClockDeskThin;
