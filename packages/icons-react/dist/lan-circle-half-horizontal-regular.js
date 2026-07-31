import React from 'react';

export const LanCircleHalfHorizontalRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M2.2 287.9C0 270.4 14.6 256 32.3 256h448c17.7 0 32.2 14.4 30 31.9C494.6 414.2 386.8 512 256.3 512S17.9 414.2 2.2 287.9M53.9 304C75.6 395.7 158 464 256.3 464S437 395.7 458.6 304z"})
);

export default LanCircleHalfHorizontalRegular;
