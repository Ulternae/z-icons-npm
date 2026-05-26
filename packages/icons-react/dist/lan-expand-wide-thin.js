import React from 'react';

export const LanExpandWideThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M120 64c4.4 0 8 3.6 8 8s-3.6 8-8 8H16v104c0 4.4-3.6 8-8 8s-8-3.6-8-8V72c0-4.4 3.6-8 8-8zM0 328c0-4.4 3.6-8 8-8s8 3.6 8 8v104h104c4.4 0 8 3.6 8 8s-3.6 8-8 8H8c-4.4 0-8-3.6-8-8zM392 64h112c4.4 0 8 3.6 8 8v112c0 4.4-3.6 8-8 8s-8-3.6-8-8V80H392c-4.4 0-8-3.6-8-8s3.6-8 8-8m120 264v112c0 4.4-3.6 8-8 8H392c-4.4 0-8-3.6-8-8s3.6-8 8-8h104V328c0-4.4 3.6-8 8-8s8 3.6 8 8"})
);

export default LanExpandWideThin;
