import React from 'react';

export const LanMapMarkerEditThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M16 188.6C16 93.5 94.5 16 192 16s176 77.5 176 172.6c0 55-28 117.3-63.9 174.2-35.6 56.3-77.5 104.9-102.2 131.8-5.5 6-14.3 6-19.7 0-24.8-26.9-66.7-75.5-102.3-131.8C44 306 16 243.6 16 188.6M192 0C86 0 0 84.4 0 188.6c0 119.3 120.2 262.3 170.4 316.8 11.8 12.8 31.4 12.8 43.2 0C263.8 450.9 384 307.9 384 188.6 384 84.4 298 0 192 0m32.3 117.5c5.6-5.6 13.2-8.7 21.1-8.7 16.5 0 29.8 13.3 29.8 29.8 0 7.9-3.1 15.5-8.7 21.1l-97.1 97.1c-4.1 4.1-9.2 7-14.9 8.4L115 275c-3.6.9-7-2.5-6.1-6.1l9.9-39.5c1.4-5.6 4.3-10.8 8.4-14.9l97.1-97.1zM245.4 96c-11.3 0-22.1 4.5-30.1 12.5l-97.1 97.1a45.1 45.1 0 0 0-11.8 20.8l-9.9 39.5c-3.2 12.7 8.9 24.8 21.6 21.6l39.5-9.9c7.9-2 15.1-6 20.8-11.8l97.1-97.1c8-8 12.5-18.8 12.5-30.1 0-23.5-19.1-42.6-42.6-42.6"})
);

export default LanMapMarkerEditThin;
