import React from 'react';

export const LanThermometer = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M352.8 53.8c14-14 32.9-21.8 52.7-21.8 41.1 0 74.5 33.4 74.5 74.5 0 19.8-7.8 38.7-21.8 52.7L238.1 379.3c-3 3-7.1 4.7-11.3 4.7h-98.7v-98.7c0-4.2 1.7-8.3 4.7-11.3l27.3-27.3 36.7 36.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-36.7-36.7 57.4-57.4 36.7 36.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L262.6 144 320 86.6l36.7 36.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L342.6 64zM96 285.3v108.1L4.7 484.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l91.3-91.3h108.1c12.7 0 24.9-5.1 33.9-14.1l220.2-220.1c20-20 31.2-47.1 31.2-75.3C512 47.7 464.3 0 405.5 0c-28.2 0-55.3 11.2-75.3 31.2L110.1 251.3c-9 9-14.1 21.2-14.1 33.9z"})
);

export default LanThermometer;
