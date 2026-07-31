import React from 'react';

export const LanMapMarkerSlashThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32.125 576.025 575.95',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M13.7-29.8c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l560 560c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L414.1 370.6c36.1-57.3 65.9-122.6 65.9-182C480 84.4 394 0 288 0c-66.9 0-125.7 33.6-160.1 84.5zM139.4 96c31.2-48.1 86-80 148.6-80 97.5 0 176 77.5 176 172.6 0 53.8-26.8 114.6-61.6 170.5zM112 188.6c0-9.2.7-18.3 2.2-27.2l-13.7-13.7c-3 13.2-4.5 26.8-4.5 40.9 0 119.3 120.2 262.3 170.4 316.8 11.8 12.8 31.5 12.8 43.3 0 16.9-18.4 41.9-46.9 67.4-81.1l-11.4-11.4c-25.6 34.5-50.7 63.2-67.8 81.7-5.5 6-14.3 6-19.7 0-24.8-26.9-66.7-75.5-102.3-131.8C140 306 112 243.6 112 188.6"})
);

export default LanMapMarkerSlashThin;
