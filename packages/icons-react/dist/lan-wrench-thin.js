import React from 'react';

export const LanWrenchThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M192 160C192 71.6 263.6 0 352 0c24.6 0 47.9 5.6 68.7 15.5 2.3 1.1 4 3.3 4.4 5.9s-.4 5.2-2.2 7l-87 87v60.7h60.7l87-87c1.8-1.8 4.5-2.7 7-2.2s4.7 2.1 5.9 4.4c9.9 20.8 15.5 44.2 15.5 68.7 0 88.4-71.6 160-160 160-20.6 0-40.3-3.9-58.5-11L109.3 493.3c-25 25-65.5 25-90.5 0s-25-65.5 0-90.5L203 218.5c-7.1-18.1-11-37.8-11-58.5M352 16c-79.5 0-144 64.5-144 144 0 20.3 4.2 39.7 11.8 57.2 1.3 3 .6 6.5-1.7 8.8l-188 188.1c-18.7 18.7-18.7 49.1 0 67.9s49.1 18.7 67.9 0l188-188.1c2.3-2.3 5.8-3 8.8-1.7 17.5 7.6 36.8 11.8 57.2 11.8 79.5 0 144-64.5 144-144 0-18.1-3.3-35.4-9.4-51.3l-80.9 80.9c-1.5 1.5-3.5 2.3-5.7 2.3h-72c-4.4 0-8-3.6-8-8v-72c0-2.1.8-4.2 2.3-5.7l80.9-80.9c-15.8-6-33.1-9.3-51.2-9.3"})
);

export default LanWrenchThin;
