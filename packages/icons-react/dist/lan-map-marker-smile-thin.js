import React from 'react';

export const LanMapMarkerSmileThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M16 188.6C16 93.5 94.5 16 192 16s176 77.5 176 172.6c0 55-28 117.3-63.9 174.2-35.6 56.3-77.5 104.9-102.2 131.8-5.5 6-14.3 6-19.7 0-24.8-26.9-66.7-75.5-102.3-131.8C44 306 16 243.6 16 188.6M192 0C86 0 0 84.4 0 188.6c0 119.3 120.2 262.3 170.4 316.8 11.8 12.8 31.4 12.8 43.2 0C263.8 450.9 384 307.9 384 188.6 384 84.4 298 0 192 0m-64 176a16 16 0 1 0 0-32 16 16 0 1 0 0 32m144-16a16 16 0 1 0-32 0 16 16 0 1 0 32 0m-169.3 99.6c-2.5-3.7-7.4-4.7-11.1-2.2s-4.7 7.4-2.2 11.1C101.1 286 137.4 320 192 320s90.9-34 102.7-51.6c2.5-3.7 1.5-8.6-2.2-11.1s-8.6-1.5-11.1 2.2C271.7 274 239.8 304 192 304s-79.7-30-89.3-44.4"})
);

export default LanMapMarkerSmileThin;
