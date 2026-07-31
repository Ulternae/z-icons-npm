import React from 'react';

export const LanBoltSlash = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -31.95 576 575.9',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M27.3-27.3c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l544 544c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-161-161 90.2-75.1c10.3-8.6 14.2-22.8 9.6-35.5S493.5 224 480 224H335.3l12.8-32 65.6-164.1c5.4-13.6.9-29.2-10.9-37.8s-28-8.1-39.3 1.3L190.3 135.7zm185.8 185.7L384 16l-78.4 196.1c-3.9 9.9-2.7 21 3.2 29.8s15.8 14.1 26.5 14.1H480l-92.4 77-174.5-174.5zm-137.6 73c-10.4 8.6-14.2 22.8-9.6 35.5S82.5 288 96 288h133.6l-32-32H96l55.4-46.2-22.7-22.7zM192 496l70.2-175.4-24.6-24.6-9.6 24-65.6 164.1c-5.4 13.6-.9 29.2 10.9 37.8s28 8.1 39.3-1.3l136.1-113.5-22.7-22.7z"})
);

export default LanBoltSlash;
