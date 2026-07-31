import React from 'react';

export const LanCircle9Thin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480m0 496a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-40-168c0 4.4 3.6 8 8 8h48c30.9 0 56-25.1 56-56v-72c0-35.3-28.7-64-64-64h-16c-35.3 0-64 28.7-64 64s28.7 64 64 64h16c19.1 0 36.3-8.4 48-21.7V296c0 22.1-17.9 40-40 40h-48c-4.4 0-8 3.6-8 8m48-168c26.5 0 48 21.5 48 48s-21.5 48-48 48h-16c-26.5 0-48-21.5-48-48s21.5-48 48-48z"})
);

export default LanCircle9Thin;
