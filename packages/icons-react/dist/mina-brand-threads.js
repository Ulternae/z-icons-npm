import React from 'react';

export const MinaBrandThreads = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M9.77 8.515c2.23-1.812 5.444-.845 5.823 2.135.403 3.163-.4 5.67-3.52 5.67-2.895 0-2.806-2.52-2.806-2.52 0-2.7 4.589-3.06 7.262-1.71 4.9 3.15 1.336 8.91-4.01 8.91C8.09 21 4.5 18.75 4.5 12s3.59-9 8.02-9c3.125 0 5.944 1.626 6.98 4.879"})
);

export default MinaBrandThreads;
