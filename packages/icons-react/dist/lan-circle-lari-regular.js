import React from 'react';

export const LanCircleLariRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416m0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512m0-400c0-8.8-7.2-16-16-16s-16 7.2-16 16v13.3c-50.9 15.4-88 62.7-88 118.7 0 28.9 9.9 55.5 26.5 76.6-10.6 2.5-18.5 12-18.5 23.4 0 13.3 10.7 24 24 24h176c13.3 0 24-10.7 24-24s-10.7-24-24-24h-84c-42 0-76-34-76-76 0-28.9 16.2-54.1 40-66.9V208c0 8.8 7.2 16 16 16s16-7.2 16-16v-39.9c1.3-.1 2.7-.1 4-.1q6.15 0 12 .9V208c0 8.8 7.2 16 16 16s16-7.2 16-16v-26c15.4 11 26.6 27.5 30.5 46.7 2.6 13 15.3 21.4 28.3 18.7s21.4-15.3 18.7-28.3c-8.5-42-38.2-76.3-77.5-91.2v-16c0-8.8-7.2-16-16-16s-16 7.2-16 16v8.6c-3.9-.4-8-.6-12-.6-1.3 0-2.7 0-4 .1v-8.1z"})
);

export default LanCircleLariRegular;
