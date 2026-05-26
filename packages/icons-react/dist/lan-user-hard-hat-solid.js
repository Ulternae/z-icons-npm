import React from 'react';

export const LanUserHardHatSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M216-32c-13.3 0-24 10.7-24 24v72h-8c-13.3 0-24-10.7-24-24V-6.9C123.9 14 99 52 96.2 96H96c-13.3 0-24 10.7-24 24s10.7 24 24 24c0 70.7 57.3 128 128 128s128-57.3 128-128c13.3 0 24-10.7 24-24s-10.7-24-24-24h-.2C349 52 324.1 14 288-6.9V40c0 13.3-10.7 24-24 24h-8V-8c0-13.3-10.7-24-24-24zm88 176c0 44.2-35.8 80-80 80s-80-35.8-80-80zM180.6 320C89.7 320 16 393.7 16 484.6c0 15.1 12.3 27.4 27.4 27.4h361.1c15.1 0 27.4-12.3 27.4-27.4 0-90.9-73.7-164.6-164.6-164.6h-86.9z"})
);

export default LanUserHardHatSolid;
