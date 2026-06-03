import React from 'react';

export const LanPersonDollyRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32 512.1 576',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64-32a56 56 0 1 1 0 112 56 56 0 1 1 0-112M0 176.4C0 140.8 28.8 112 64.4 112c23.3 0 44.7 12.5 56.1 32.8l42.1 74.8c7.1 12.6 20.4 20.4 34.9 20.4h58.6v-56c0-13.3 10.7-24 24-24s24 10.7 24 24v280h184c13.3 0 24 10.7 24 24s-10.7 24-24 24H317.4c-6.6 18.6-24.4 32-45.3 32-26.5 0-48-21.5-48-48 0-20.9 13.4-38.7 32-45.3V288h-58.6c-27.4 0-52.9-12.7-69.4-33.9V352l12.8 9.6C163 378.2 176 404.3 176 432v88c0 13.3-10.7 24-24 24s-24-10.7-24-24v-88c0-12.6-5.9-24.4-16-32l-76.8-57.6C13 325.8 0 299.7 0 272zm0 193.2c3.5 3.5 7.2 6.8 11 9.9L48 409v111c0 13.3-10.7 24-24 24S0 533.3 0 520zM64 160c-8.8 0-16 7.2-16 16v95.4c0 10.6 4.2 20.8 11.7 28.3L80 320V176c0-8.8-7.2-16-16-16m320 96h96c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32h-96c-17.7 0-32-14.3-32-32v-96c0-17.7 14.3-32 32-32"})
);

export default LanPersonDollyRegular;
