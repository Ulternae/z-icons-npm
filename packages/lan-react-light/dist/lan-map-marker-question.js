import React from 'react';

export function LanMapMarkerQuestion({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 515',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M32 188.6C32 102.6 103.1 32 192 32s160 70.6 160 156.6c0 50.3-25.9 109.4-61.4 165.6-34 53.8-74 100.5-98.6 127.4-24.6-26.9-64.6-73.7-98.6-127.4C57.9 298 32 238.9 32 188.6M192 0C86 0 0 84.4 0 188.6c0 119.3 120.2 262.3 170.4 316.8 11.8 12.8 31.4 12.8 43.2 0C263.8 450.9 384 307.9 384 188.6 384 84.4 298 0 192 0m0 144c20.6 0 37.2 16.7 37.2 37.2 0 17.8-11 27-23.2 32.5-14.7 6.6-30.1 21.5-30.1 42.3 0 8.8 7.2 16 16 16s16-7.2 16-16c0-3.8 3.4-9.6 11.1-13.1 17.8-8 42.1-25.9 42.1-61.7 0-38.2-31-69.2-69.2-69.2s-69.2 31-69.2 69.2c0 8.8 7.2 16 16 16s16-7.2 16-16c0-20.6 16.7-37.2 37.2-37.2zm20 176a20 20 0 1 0-40 0 20 20 0 1 0 40 0"})
  );
}

export default LanMapMarkerQuestion;
