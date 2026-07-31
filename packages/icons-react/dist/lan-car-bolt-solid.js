import React from 'react';

export const LanCarBoltSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M39.6 196.8 74.8 96.3C88.3 57.8 124.6 32 165.4 32h181.2c40.8 0 77.1 25.8 90.6 64.3l35.2 100.5c23.2 9.6 39.6 32.5 39.6 59.2v192c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32v-32H96v32c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V256c0-26.7 16.4-49.6 39.6-59.2M128 304a32 32 0 1 0-64 0 32 32 0 1 0 64 0m288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64M184.5 224H230l-24.4 78c-2.8 8.9 3.9 18 13.2 18 3.3 0 6.6-1.2 9.1-3.4l110.4-95.7c3.6-3.1 5.7-7.7 5.7-12.5 0-9.1-7.4-16.5-16.5-16.5H282l24.4-78c2.8-8.9-3.9-18-13.2-18-3.3 0-6.6 1.2-9.1 3.4l-110.4 95.8c-3.6 3.1-5.7 7.7-5.7 12.5 0 9.1 7.4 16.5 16.5 16.5z"})
);

export default LanCarBoltSolid;
