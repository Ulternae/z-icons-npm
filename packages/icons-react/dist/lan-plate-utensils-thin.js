import React from 'react';

export const LanPlateUtensilsThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 528',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M480 64v20.4C441.1 51.7 390.8 32 336 32c-62.7 0-119.3 25.7-160 67.2V77.1c42.5-38 98.5-61.1 160-61.1 54 0 103.9 17.9 144 48m32 96v-30.2C512 66.9 562.9 16 625.8 16c7.8 0 14.2 6.4 14.2 14.2V520c0 4.4-3.6 8-8 8s-8-3.6-8-8V320h-64c-26.5 0-48-21.5-48-48zM136 16c4.4 0 8 3.6 8 8v160c0 22.1-17.9 40-40 40H80v264c0 4.4-3.6 8-8 8s-8-3.6-8-8V224H40c-22.1 0-40-17.9-40-40V24c0-4.4 3.6-8 8-8s8 3.6 8 8v160c0 13.3 10.7 24 24 24h24V24c0-4.4 3.6-8 8-8s8 3.6 8 8v184h24c13.3 0 24-10.7 24-24V24c0-4.4 3.6-8 8-8m420 336c-37 84.8-121.6 144-220 144-98.8 0-183.6-59.7-220.4-144.9 5.4-.9 10.6-2.4 15.6-4.4C166 425.2 244.6 480 336.1 480c89.4 0 166.5-52.3 202.4-128h17.6zm-220 48a144 144 0 1 1 0-288 144 144 0 1 1 0 288m0-16a128 128 0 1 0 0-256 128 128 0 1 0 0 256m192-254.2V272c0 17.7 14.3 32 32 32h64V32c-53.2.9-96 44.4-96 97.8"})
);

export default LanPlateUtensilsThin;
