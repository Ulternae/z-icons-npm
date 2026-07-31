import React from 'react';

export const MinaMountainSnow = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"m13.006 15.265 2.117-3.14m0 0 .251-.37a1.637 1.637 0 0 1 2.861.234l2.596 5.541c.536 1.142-.27 2.47-1.497 2.47H4.666c-1.224 0-2.03-1.32-1.501-2.462l5.808-12.56a1.641 1.641 0 0 1 3.015.03z"}), React.createElement("path", {"d":"M4.5 15s3.5-1.5 6 0c5.972 3.583 9 0 9 0"})
);

export default MinaMountainSnow;
