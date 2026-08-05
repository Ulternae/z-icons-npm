import React from 'react';

export function LanEggRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M192 448c-74.7 0-144-75.4-144-160 0-48.3 14.1-107.7 41.3-153.5C116.4 88.8 151.1 64 192 64s75.6 24.8 102.7 70.5C321.9 180.4 336 239.8 336 288c0 84.6-69.3 160-144 160M0 288c0 106 86 208 192 208s192-102 192-208c0-112-64-272-192-272S0 176 0 288m170.8-154c6.5-6 7-16.1 1-22.6s-16.1-7-22.6-1c-23.9 21.8-41.1 52.7-52.3 84.2C85.7 226.2 80 259.7 80 288.1c0 8.8 7.2 16 16 16s16-7.2 16-16c0-24.5 5-54.4 15.1-82.8 10.1-28.5 25-54.1 43.7-71.2z"})
  );
}

export default LanEggRegular;
