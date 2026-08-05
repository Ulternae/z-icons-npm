import React from 'react';

export function LanEgg({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M192 464c-85.2 0-160-84.3-160-176 0-50.8 14.7-113.1 43.5-161.7C104.2 77.9 143.4 48 192 48s87.8 29.9 116.5 78.3C337.3 174.9 352 237.1 352 288c0 91.7-74.8 176-160 176M0 288c0 106 86 208 192 208s192-102 192-208c0-112-64-272-192-272S0 176 0 288m170.8-154c6.5-6 7-16.1 1-22.6s-16.1-7-22.6-1c-23.9 21.8-41.1 52.7-52.3 84.2C85.7 226.2 80 259.7 80 288.1c0 8.8 7.2 16 16 16s16-7.2 16-16c0-24.5 5-54.4 15.1-82.8 10.1-28.5 25-54.1 43.7-71.2z"})
  );
}

export default LanEgg;
