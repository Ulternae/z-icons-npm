import React from 'react';

export const LanHatWitchThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M382.1 16c-7.7 0-15.2 2.2-21.7 6.2L241.6 96.4c-37.9 23.7-65.9 60.4-78.7 103.2L117.2 352h278.3l-46.8-159c-3.3-11.1-3.1-23 .6-34.1 7.7-23.2 29.5-38.9 54-38.9h2.4c13.7 0 27 4.7 37.6 13.2l52.7 42.1v-49.7c0-16.5-7.3-32.1-19.8-42.7l-67.7-57.2c-7.4-6.3-16.8-9.7-26.5-9.7zM88.4 448h335.3L400 367.6v.4H112.4zm-16.7 0 .7-2.3L147.6 195c14-46.5 44.4-86.4 85.6-112.1L351.8 8.7C360.9 3 371.3 0 382 0c13.5 0 26.5 4.8 36.8 13.5l67.6 57.2c16.2 13.7 25.5 33.8 25.5 55V192c0 3.1-1.8 5.9-4.5 7.2s-6.1 1-8.5-1l-65.7-52.5c-7.8-6.3-17.6-9.7-27.7-9.7h-2.4c-17.6 0-33.2 11.3-38.8 28-2.6 7.9-2.8 16.5-.4 24.5l75.7 257.3.7 2.3H480c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 512c-17.7 0-32-14.3-32-32s14.3-32 32-32h39.6zM32 464c-8.8 0-16 7.2-16 16s7.2 16 16 16h448c8.8 0 16-7.2 16-16s-7.2-16-16-16z"})
);

export default LanHatWitchThin;
