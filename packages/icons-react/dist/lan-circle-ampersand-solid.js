import React from 'react';

export const LanCircleAmpersandSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-40-320.4c0 4.1 1.6 8.1 4.6 11l14.5 14.5 23.6-17.3c3.4-2.5 5.4-6.4 5.4-10.6 0-7.3-5.9-13.2-13.2-13.2h-19.2c-8.6 0-15.6 7-15.6 15.6zm71 46.9-17.6 12.9 28.7 28.7 26.2-37.8c7.5-10.9 22.5-13.6 33.4-6.1s13.6 22.5 6.1 33.4l-31.1 45 28.4 28.4c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-22.4-22.4a80 80 0 0 1-62 29.4h-32.2c-36.7 0-66.5-29.8-66.5-66.5 0-21.2 10.1-41.1 27.2-53.6l24.7-18.1-9.2-9.2c-11.9-11.9-18.6-28.1-18.6-45 0-35.1 28.5-63.6 63.6-63.6H251c33.8 0 61.2 27.4 61.2 61.2 0 19.5-9.3 37.8-25 49.3zm-87.5 64.1c-4.7 3.5-7.5 9-7.5 14.9 0 10.2 8.3 18.5 18.5 18.5h32.2c10.5 0 20.3-5.2 26.3-13.8l1.4-2-40.1-40.1-30.7 22.5z"})
);

export default LanCircleAmpersandSolid;
