import React from 'react';

export const LanSimCardsRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32 448 576',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M400 384V90.5c0-4.2-1.7-8.3-4.7-11.3l-58.5-58.5c-3-3-7.1-4.7-11.3-4.7H160c-8.8 0-16 7.2-16 16v352c0 8.8 7.2 16 16 16h224c8.8 0 16-7.2 16-16m-16 64H160c-35.3 0-64-28.7-64-64V32c0-35.3 28.7-64 64-64h165.5c17 0 33.3 6.7 45.3 18.7l58.5 58.5c12 12 18.7 28.3 18.7 45.3V384c0 35.3-28.7 64-64 64M24 160c13.3 0 24 10.7 24 24v296c0 8.8 7.2 16 16 16h264c13.3 0 24 10.7 24 24s-10.7 24-24 24H64c-35.3 0-64-28.7-64-64V184c0-13.3 10.7-24 24-24m280 112v-48h16c17.7 0 32 14.3 32 32v16zm48 48c0 17.7-14.3 32-32 32h-48v-48h80zm-128 32c-17.7 0-32-14.3-32-32v-16h48v48zm-32-96c0-17.7 14.3-32 32-32h48v48h-80z"})
);

export default LanSimCardsRegular;
