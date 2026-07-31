import React from 'react';

export const LanBoxIsometricRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -6.8 512 525.6',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M232 270.1 64 176.8v169.5c0 14.5 7.9 27.9 20.6 35L232 463.2zM145.4 96.9 82.3 132l173.8 96.5 62.1-34.5-170.7-96-2-1.1zm49.3-27.4 172.7 97.1 62.5-34.7-154.4-85.8c-12.1-6.7-26.8-6.7-38.9 0l-42 23.5zM280 270.1v193.1l147.4-81.9c12.7-7.1 20.6-20.4 20.6-35V176.7L280 270zm18.7 237.6a87.87 87.87 0 0 1-85.5 0l-152-84.4c-27.9-15.5-45.2-45-45.2-77V161c0-29.1 15.8-55.8 41.1-69.9L213.2 4.3c26.6-14.8 58.9-14.8 85.5 0L454.8 91c25.4 14.1 41.2 40.9 41.2 70v185.4c0 32-17.3 61.4-45.3 76.9z"})
);

export default LanBoxIsometricRegular;
