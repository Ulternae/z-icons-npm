import React from 'react';

export const LanUTurnDownLeftRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M6.8 364.3c-10.3 12.8-7.2 28-1.1 37.7l3 4 1 1 111.7 111.7 3.9 3.3c20.3 14.8 50.7.6 50.7-26v-32h120l11.1-.3C421.3 457.9 512 363.6 512 248S421.3 38.1 307.1 32.3L296 32H96c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32h200l5.7.3C330 195.1 352 219 352 248s-22 52.9-50.3 55.7l-5.7.3H176v-32c0-24.4-26.2-39.2-47-28.3l-3 1.9-1.9 1.4-2.7 2.3-112 112-2.6 2.9zM128 310.6V328c0 13.3 10.7 24 24 24h144l5.3-.1c55-2.8 98.7-48.2 98.7-103.9s-43.7-101.1-98.7-103.9l-5.3-.1H112V80h184l8.7.2C393.4 84.7 464 158.1 464 248s-70.6 163.3-159.3 167.8l-8.7.2H152c-13.3 0-24 10.7-24 24v17.4L54.6 384z"})
);

export default LanUTurnDownLeftRegular;
