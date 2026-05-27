import React from 'react';

export const NeoWifiSlashSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 616 560',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M36.7 8.2c10.9-10.9 28.7-10.9 39.6 0l52.2 52.2C181.9 39.1 242.4 28 308.5 28c122.2 0 225.4 37.9 299.3 108.2 11.2 10.7 11.6 28.4 1 39.6s-28.4 11.6-39.6 1C507.5 118.1 419 84 308.5 84c-50.1 0-95.7 7-136.3 20.1l46.3 46.3c28.1-6.9 58.2-10.4 90-10.4 89 0 164.8 27.6 219.3 79.5 11.2 10.7 11.6 28.4 1 39.6s-28.4 11.6-39.6 1c-42.3-40.3-103.4-64-180.7-64-14.6 0-28.5.8-41.9 2.5l53.8 53.8c50.7 2.3 94.8 19.5 127.4 50.5 11.2 10.7 11.6 28.4 1 39.6-8.6 9-21.7 11.1-32.4 6l163.9 163.7c10.9 10.9 10.9 28.7 0 39.6s-28.7 10.9-39.6 0l-504-504c-10.9-10.9-10.9-28.7 0-39.6m221.9 387.6c8.6-8.1 21.7-5.4 30 2.9l69.1 69.1c8.3 8.3 11 21.5 2.9 30-12.2 12.9-30.1 20.1-52.2 20.1-42.8 0-70-27.2-70-70 0-22.1 7.2-40 20.1-52.2z"})
);

export default NeoWifiSlashSolid;
