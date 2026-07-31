import React from 'react';

export const LanCircleSwedishKronaThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480m0 496a256 256 0 1 0 0-512 256 256 0 1 0 0 512M152 144c-4.4 0-8 3.6-8 8v224c0 4.4 3.6 8 8 8s8-3.6 8-8v-60.3l34.5-28.8 46.3 92.6c2 4 6.8 5.6 10.7 3.6s5.6-6.8 3.6-10.7l-48-96 46-38.3c3.4-2.8 3.9-7.9 1-11.3s-7.9-3.9-11.3-1L160 294.9V152c0-4.4-3.6-8-8-8m182.9 122.4c7.8-6.7 17.7-10.4 28-10.4H376c4.4 0 8-3.6 8-8s-3.6-8-8-8h-13.1c-14.1 0-27.8 5.1-38.5 14.3-1.6 1.3-3 2.8-4.4 4.3V248c0-4.4-3.6-8-8-8s-8 3.6-8 8v128c0 4.4 3.6 8 8 8s8-3.6 8-8v-77.1c0-12.5 5.4-24.4 14.9-32.5"})
);

export default LanCircleSwedishKronaThin;
