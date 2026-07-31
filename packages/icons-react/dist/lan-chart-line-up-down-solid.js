import React from 'react';

export const LanChartLineUpDownSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64v336c0 44.2 35.8 80 80 80h400c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16zm384-32h-73.4C362.1 32 352 42.1 352 54.6c0 6 2.4 11.8 6.6 16l18.7 18.7-65.4 65.4-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-88 88c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l65.4-65.4 57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l88-88 18.7 18.7c4.2 4.2 10 6.6 16 6.6 12.5 0 22.6-10.1 22.6-22.6L480 48c0-8.8-7.2-16-16-16zm-6.7 198.6-18.7 18.7-23.4-23.4-45.3 45.3 23.4 23.4-18.7 18.7c-4.2 4.2-6.6 10-6.6 16 0 12.5 10.1 22.6 22.6 22.6H464c8.8 0 16-7.2 16-16v-89.4c0-12.5-10.1-22.6-22.6-22.6-6 0-11.8 2.4-16 6.6z"})
);

export default LanChartLineUpDownSolid;
