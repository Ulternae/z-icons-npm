import React from 'react';

export const LanHeartHalfThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M133.1 48C68.4 48 16 100.4 16 165.1c0 60.1 36.9 115.8 75.4 162.7 43.1 52.4 95.4 98 131.2 125.4 5.2 3.9 11.1 6.8 17.4 8.6V113l-12-16.5C206 66 170.7 48 133.1 48M0 165.1C0 91.6 59.6 32 133.1 32 175.8 32 216 52.5 241 87.1l13.5 18.6c1 1.4 1.5 3 1.5 4.7v361.1c0 2.3-1 4.5-2.7 6s-4 2.2-6.2 2c-12.4-1.4-24.2-5.9-34.2-13.6C176.4 438 123.2 391.5 79.1 338 40.4 291 0 231.4 0 165.2z"})
);

export default LanHeartHalfThin;
