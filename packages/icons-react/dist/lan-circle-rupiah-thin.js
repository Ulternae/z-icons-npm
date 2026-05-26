import React from 'react';

export const LanCircleRupiahThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480m0 496a256 256 0 1 0 0-512 256 256 0 1 0 0 512M136 144c-4.4 0-8 3.6-8 8v192c0 4.4 3.6 8 8 8s8-3.6 8-8v-72h56c.9 0 1.7 0 2.6-.1l30 75c1.6 4.1 6.3 6.1 10.4 4.5s6.1-6.3 4.5-10.4l-28.7-71.8c26.2-8 45.3-32.4 45.3-61.2 0-35.3-28.7-64-64-64h-64zm64 112h-56v-96h56c26.5 0 48 21.5 48 48s-21.5 48-48 48m88-8v136c0 4.4 3.6 8 8 8s8-3.6 8-8v-48h32c26.5 0 48-21.5 48-48s-21.5-48-48-48h-40c-4.4 0-8 3.6-8 8m16 8h32c17.7 0 32 14.3 32 32s-14.3 32-32 32h-32z"})
);

export default LanCircleRupiahThin;
