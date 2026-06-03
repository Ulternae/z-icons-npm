import React from 'react';

export const LanFileJsRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 516 548',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M368 380c11 0 20 9 20 20v96c0 28.7-23.3 52-52 52s-52-23.3-52-52v-16c0-11 9-20 20-20s20 9 20 20v16c0 6.6 5.4 12 12 12s12-5.4 12-12v-96c0-11 9-20 20-20m120 0c11 0 20 9 20 20s-9 20-20 20h-24c-6.6 0-12 5.4-12 12s5.4 12 12 12c28.7 0 52 23.3 52 52s-23.3 52-52 52h-32c-11 0-20-9-20-20s9-20 20-20h32c6.6 0 12-5.4 12-12s-5.4-12-12-12c-28.7 0-52-23.3-52-52s23.3-52 52-52zM235.8.3c14.7 1.5 28.4 7.9 38.9 18.4l122.6 122.5c12 12 18.7 28.3 18.7 45.2v149.5h-48v-128h-88c-39.8 0-72-32.2-72-72v-88H96c-8.8 0-16 7.2-16 16v384c0 8.8 7.2 16 16 16h144v48H96c-35.3 0-64-28.7-64-64V64C32 28.7 60.7 0 96 0h133.5zM256 136c0 13.3 10.7 24 24 24h68.1L256 67.9z"})
);

export default LanFileJsRegular;
