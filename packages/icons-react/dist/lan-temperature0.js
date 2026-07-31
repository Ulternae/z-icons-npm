import React from 'react';

export const LanTemperature0 = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 320 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M80 112c0-44.2 35.8-80 80-80s80 35.8 80 80v171.3c0 3.9 1.4 7.7 4 10.6 17.4 19.8 28 45.7 28 74.1 0 61.9-50.1 112-112 112S48 429.9 48 368c0-28.4 10.6-54.3 28-74.1 2.6-2.9 4-6.7 4-10.6zM160 0C98.1 0 48 50.1 48 112v165.5c-20 24.7-32 56.2-32 90.5 0 79.5 64.5 144 144 144s144-64.5 144-144c0-34.3-12-65.8-32-90.5V112C272 50.1 221.9 0 160 0m32 368c0 17.7-14.3 32-32 32s-32-14.3-32-32 14.3-32 32-32 32 14.3 32 32m32 0c0-35.3-28.7-64-64-64s-64 28.7-64 64 28.7 64 64 64 64-28.7 64-64"})
);

export default LanTemperature0;
