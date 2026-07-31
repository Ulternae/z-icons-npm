import React from 'react';

export const LanUTurnDownRightRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512.023 527.976',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M505.3 364.3c10.3 12.8 7.2 28 1.1 37.7l-3 4-1 1-111.7 111.7-3.9 3.3c-20.3 14.8-50.7.6-50.7-26v-32h-120l-11.1-.3C90.8 457.9 0 363.6 0 248S90.8 38.1 204.9 32.3L216 32h200c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32H216l-5.7.3C182 195.1 160 219 160 248s22 52.9 50.3 55.7l5.7.3h120v-32c0-24.4 26.2-39.2 47-28.3l3 1.9 1.9 1.4 2.7 2.3 112 112 2.6 2.9zM384 310.6V328c0 13.3-10.7 24-24 24H216l-5.3-.1c-55-2.8-98.7-48.2-98.7-103.9s43.7-101.1 98.7-103.9l5.3-.1h184V80H216l-8.7.2C118.6 84.7 48 158.1 48 248s70.6 163.3 159.3 167.8l8.7.2h144c13.3 0 24 10.7 24 24v17.4l73.4-73.4z"})
);

export default LanUTurnDownRightRegular;
