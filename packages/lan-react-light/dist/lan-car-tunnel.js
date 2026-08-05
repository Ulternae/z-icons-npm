import React from 'react';

export function LanCarTunnel({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M32 256C32 132.3 132.3 32 256 32s224 100.3 224 224v240c0 8.8 7.2 16 16 16s16-7.2 16-16V256C512 114.6 397.4 0 256 0S0 114.6 0 256v240c0 8.8 7.2 16 16 16s16-7.2 16-16zm140.7 8.9c2.7-5.5 8.3-8.9 14.4-8.9H325c6.1 0 11.7 3.5 14.4 8.9l27.1 55.1H145.7l27.1-55.1zm-44.7 102c0-5.1.8-10.1 2.4-14.9h251.3c1.6 4.8 2.4 9.8 2.4 14.9V448h-256v-81.1zm0 113.1h256v14c0 8.8 7.2 16 16 16s16-7.2 16-16V366.9c0-12.2-2.8-24.3-8.2-35.3L368 250.8c-8-16.4-24.7-26.8-43-26.8H187c-18.3 0-35 10.4-43.1 26.8l-39.7 80.8c-5.4 11-8.2 23.1-8.2 35.3V494c0 8.8 7.2 16 16 16s16-7.2 16-16zm48-64a16 16 0 1 0 0-32 16 16 0 1 0 0 32m176-16a16 16 0 1 0-32 0 16 16 0 1 0 32 0"})
  );
}

export default LanCarTunnel;
