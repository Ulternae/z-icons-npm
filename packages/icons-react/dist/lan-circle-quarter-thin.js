import React from 'react';

export const LanCircleQuarterThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M18.1 226C31.6 117.4 117.7 31.3 226.3 17.8c6.7-.8 14 4.7 14 14.1v192c0 8.8-7.2 16-16 16h-192c-9.4 0-15-7.3-14.1-14zm-15.9-2c-2.2 17.6 12.4 32 30 32h192c17.7 0 32-14.3 32-32V32c0-17.7-14.4-32.2-31.9-30C108.5 16.4 16.6 108.2 2.2 224.1z"})
);

export default LanCircleQuarterThin;
