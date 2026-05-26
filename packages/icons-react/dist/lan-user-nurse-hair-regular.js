import React from 'react';

export const LanUserNurseHairRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"m115.2 15.6 96-42c8.2-3.6 17.5-3.6 25.7 0l96 42c11.6 5.1 19.1 16.6 19.1 29.3V144c0 70.7-57.3 128-128 128S96 214.7 96 144V44.9c0-12.7 7.5-24.2 19.2-29.3m134.4 125.2C233 153.3 212.8 160 192 160h-46.4c7.4 36.5 39.7 64 78.4 64 44.2 0 80-35.8 80-80v-16h-37.3zM139 307.9c8.2-1.8 16.7.9 22.5 7l62.6 66.2 62.6-66.2c5.8-6.1 14.3-8.7 22.5-7 79.4 17 139 87.6 139 172.1v8c0 13.3-10.7 24-24 24s-24-10.7-24-24v-8c0-56.8-37.1-105.1-88.4-121.8l-70.2 74.2c-4.5 4.8-10.8 7.5-17.4 7.5s-12.9-2.7-17.4-7.5l-70.2-74.2C85.1 374.9 48 423.2 48 480v8c0 13.3-10.7 24-24 24S0 501.3 0 488v-8c0-84.5 59.6-155.1 139-172.1M208 16v16h-16c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h16v16c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8V64h16c4.4 0 8-3.6 8-8V40c0-4.4-3.6-8-8-8h-16V16c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8"})
);

export default LanUserNurseHairRegular;
