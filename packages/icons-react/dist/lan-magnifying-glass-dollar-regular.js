import React from 'react';

export const LanMagnifyingGlassDollarRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M208 48a160 160 0 1 1 0 320 160 160 0 1 1 0-320m0 368c48.8 0 93.7-16.8 129.1-44.9L471 505c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-133.8-134C399.2 301.7 416 256.8 416 208 416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208m4-320c-11 0-20 9-20 20v4c-28.8.3-52 23.7-52 52.5 0 25.7 18.5 47.6 43.9 51.8l41.7 7c6 1 10.4 6.2 10.4 12.3 0 6.9-5.6 12.5-12.5 12.5L168 256c-11 0-20 9-20 20s9 20 20 20h24v4c0 11 9 20 20 20s20-9 20-20v-4.7c25-4.1 44-25.7 44-51.8 0-25.7-18.5-47.6-43.9-51.8l-41.7-7c-6-1-10.4-6.2-10.4-12.3 0-6.9 5.6-12.5 12.5-12.5H240c11 0 20-9 20-20s-9-20-20-20h-8v-4c0-11-9-20-20-20z"})
);

export default LanMagnifyingGlassDollarRegular;
