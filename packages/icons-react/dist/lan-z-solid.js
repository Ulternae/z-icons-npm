import React from 'react';

export const LanZSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M0 64c0-17.7 14.3-32 32-32h320c12.4 0 23.7 7.2 29 18.4s3.6 24.5-4.4 34.1L100.3 416H352c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-12.4 0-23.7-7.2-29-18.4s-3.6-24.5 4.4-34.1L283.7 96H32C14.3 96 0 81.7 0 64"})
);

export default LanZSolid;
