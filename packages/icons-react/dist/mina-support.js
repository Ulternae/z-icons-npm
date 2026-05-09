import React from 'react';

export const MinaSupport = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0"}), React.createElement('path', {"d":"m18 6-3.525 3.525M6 18l3.525-3.525M6 6l3.525 3.525M18 18l-3.525-3.525m-4.95 0c-1.348-1.348-1.348-3.601 0-4.95m0 4.95c1.348 1.348 3.601 1.348 4.95 0m0 0c1.348-1.348 1.348-3.601 0-4.95m0 0c-1.348-1.348-3.601-1.348-4.95 0"})
);

export default MinaSupport;
