import React from 'react';

export const MinaEarth = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0"}), React.createElement("path", {"d":"M13 3.048a5 5 0 0 0 .982 8.3c2.018 1.013 2.789-.352 3.881.384.71.478.897 1.44.42 2.149-.501.742-1.283 1.119-1.148 2.336.077.687.499 1.278 1.045 1.783M4 9.28a4.98 4.98 0 0 1 2.806 1.846 4.98 4.98 0 0 1 .992 3.424c-.052.626.356 1.258.881 1.603A2.71 2.71 0 0 1 9 20.44"})
);

export default MinaEarth;
