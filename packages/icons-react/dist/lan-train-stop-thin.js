import React from 'react';

export const LanTrainStopThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M78.4 476.8c-2.7 3.5-7.7 4.2-11.2 1.6s-4.2-7.7-1.6-11.2zM280.2 64.4c40.3 4.1 71.8 38.2 71.8 79.6v208l-.4 8.2c-3.5 34.2-28.5 61.9-61.2 69.6l28.1 37.4c2.6 3.5 1.9 8.5-1.6 11.2-3.5 2.6-8.6 1.9-11.2-1.6L272 432H112l-33.6 44.8c-4.3-3.2-8.5-6.4-12.8-9.6l28-37.4c-32.7-7.7-57.7-35.4-61.2-69.6L32 352V144c0-41.4 31.5-75.5 71.8-79.6l8.2-.4h160zM512 0c61.9 0 112 50.1 112 112 0 59.2-45.9 107.6-104 111.7V472c0 4.4-3.6 8-8 8s-8-3.6-8-8V223.7c-58.1-4.1-104-52.5-104-111.7C400 50.1 450.1 0 512 0M48 352c0 35.3 28.7 64 64 64h160c35.3 0 64-28.7 64-64v-80H48zm144 16a32 32 0 1 1 0-64 32 32 0 1 1 0 64m0-48a16 16 0 1 0 0 32 16 16 0 1 0 0-32M112 80c-35.3 0-64 28.7-64 64v112h288V144c0-35.3-28.7-64-64-64zm400-64a96 96 0 1 0 0 192 96 96 0 1 0 0-192"})
);

export default LanTrainStopThin;
