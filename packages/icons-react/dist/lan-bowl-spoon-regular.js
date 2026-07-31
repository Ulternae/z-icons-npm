import React from 'react';

export const LanBowlSpoonRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -16 512 528',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M112 128c-42.6 0-64-28.2-64-48s21.4-48 64-48 64 28.2 64 48-21.4 48-64 48m0 48c52.2 0 96-30.6 108.5-72H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H220.5C208 14.6 164.2-16 112-16 50.1-16 0 27 0 80s50.1 96 112 96m64.5 282.9c-4.5-11.8-13.5-21.3-25-26.4C90.4 404.8 48 343.3 48 272h416c0 71.3-42.4 132.8-103.5 160.5-11.5 5.2-20.4 14.7-25 26.4-1.2 3.1-4.2 5.1-7.5 5.1H184c-3.3 0-6.3-2-7.5-5.1M48 224c-26.5 0-48 21.5-48 48 0 90.8 54.1 169 131.7 204.2 8.1 21 28.4 35.8 52.3 35.8h144c23.8 0 44.2-14.9 52.3-35.8C458 441 512 362.8 512 272c0-26.5-21.5-48-48-48z"})
);

export default LanBowlSpoonRegular;
