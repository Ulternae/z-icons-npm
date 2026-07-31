import React from 'react';

export const LanLampThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"m97.2 57.8-80 192c-2.1 4.9-1.5 10.6 1.5 15s8 7.1 13.3 7.1h384c5.3 0 10.3-2.7 13.3-7.1s3.5-10.1 1.5-15l-80-192c-2.5-6-8.3-9.8-14.8-9.8H112c-6.5 0-12.3 3.9-14.8 9.8M160 288H32c-10.7 0-20.7-5.3-26.6-14.2s-7-20.2-2.9-30.1l80-192C87.4 39.8 99.1 32 112 32h224c12.9 0 24.6 7.8 29.5 19.7l80 192c4.1 9.9 3 21.2-2.9 30.1S426.7 288 416 288H288v17.1c38.3 22.1 64 63.5 64 110.9 0 38.2-16.8 72.5-43.3 96H139.4c-26.6-23.5-43.3-57.8-43.3-96 0-47.4 25.7-88.7 64-110.9V288zm112 0h-96v26.4l-8 4.6c-33.5 19.4-56 55.6-56 97 0 31.3 12.9 59.7 33.6 80h156.8c20.8-20.3 33.6-48.7 33.6-80 0-41.4-22.5-77.6-56-97l-8-4.6z"})
);

export default LanLampThin;
