import React from 'react';

export const LanWalkieTalkieThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32 384 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M80-24c0-4.4-3.6-8-8-8s-8 3.6-8 8v88h-8C25.1 64 0 89.1 0 120v151c0 12.5 3.3 24.8 9.5 35.7l17.2 30.2c3.5 6 5.3 12.9 5.3 19.8V456c0 30.9 25.1 56 56 56h208c30.9 0 56-25.1 56-56v-99.3c0-7 1.8-13.8 5.3-19.8l17.2-30.2c6.2-10.9 9.5-23.2 9.5-35.7V120c0-30.9-25.1-56-56-56H80zM72 80h256c22.1 0 40 17.9 40 40v151c0 9.7-2.5 19.3-7.4 27.8L343.4 329c-4.8 8.5-7.4 18-7.4 27.8v99.3c0 22.1-17.9 40-40 40L88 496c-22.1 0-40-17.9-40-40v-99.3c0-9.7-2.5-19.3-7.4-27.8l-17.2-30.1c-4.8-8.5-7.4-18-7.4-27.8V120c0-22.1 17.9-40 40-40zm32 104c0 4.4 3.6 8 8 8h160c4.4 0 8-3.6 8-8s-3.6-8-8-8H112c-4.4 0-8 3.6-8 8m0 96c0 4.4 3.6 8 8 8h160c4.4 0 8-3.6 8-8s-3.6-8-8-8H112c-4.4 0-8 3.6-8 8m72-248h16c8.8 0 16 7.2 16 16h16c0-17.7-14.3-32-32-32h-16c-17.7 0-32 14.3-32 32h16c0-8.8 7.2-16 16-16m128-16h-16c-17.7 0-32 14.3-32 32h16c0-8.8 7.2-16 16-16h16c8.8 0 16 7.2 16 16h16c0-17.7-14.3-32-32-32"})
);

export default LanWalkieTalkieThin;
