import React from 'react';

export const LanBadgeCheckSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 0c36.8 0 68.8 20.7 84.9 51.1C373.8 41 411 48.9 437 75s34 63.3 23.9 96.2c30.4 16 51.1 48 51.1 84.8s-20.7 68.8-51.1 84.9C471 373.8 463 411 437 437s-63.3 34-96.2 23.9c-16 30.4-48 51.1-84.8 51.1s-68.8-20.7-84.9-51.1C138.2 471 101 463 75 437s-34-63.3-23.9-96.2C20.7 324.8 0 292.8 0 256s20.7-68.8 51.1-84.9C41 138.2 48.9 101 75 75s63.3-34 96.2-23.9C187.2 20.7 219.2 0 256 0m90.9 164.6c-10.7-7.8-25.7-5.4-33.5 5.3l-85.6 117.7-26.5-27.4c-9.2-9.5-24.4-9.8-33.9-.6s-9.8 24.4-.6 33.9l46.4 48c4.9 5.1 11.8 7.8 18.9 7.3s13.6-4.1 17.8-9.8l102.3-140.9c7.8-10.7 5.4-25.7-5.3-33.5"})
);

export default LanBadgeCheckSolid;
