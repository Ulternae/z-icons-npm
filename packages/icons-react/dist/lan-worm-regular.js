import React from 'react';

export const LanWormRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M368 192v176c0 35.3-28.7 64-64 64s-64-28.7-64-64v-48c0-53-43-96-96-96s-96 43-96 96v128c0 8.8 7.2 16 16 16s16-7.2 16-16V320c0-35.3 28.7-64 64-64s64 28.7 64 64v48c0 53 43 96 96 96s96-43 96-96V96c0-26.5-21.5-48-48-48h-48c-26.5 0-48 21.5-48 48s21.5 48 48 48h64zm-224-16c15.9 0 31.2 2.6 45.5 7.3 27.7 9.2 51.7 26.6 69 49.3q7.65 10.05 13.5 21.3c10.2 19.8 16 42.2 16 66v48c0 8.8 7.2 16 16 16s16-7.2 16-16v-176h-16c-6.3 0-12.5-.6-18.5-1.8-27.6-5.4-51-22.6-64.7-46.2-8.2-14.1-12.8-30.5-12.8-48 0-53 43-96 96-96h48c53 0 96 43 96 96v272c0 79.5-64.5 144-144 144-55.7 0-104.1-31.7-128-78-10.2-19.8-16-42.2-16-66v-48c0-8.8-7.2-16-16-16s-16 7.2-16 16v128c0 35.3-28.7 64-64 64S0 483.3 0 448V320c0-79.5 64.5-144 144-144M344 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48"})
);

export default LanWormRegular;
