import React from 'react';

export const LanCircleBitcoinSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512M224 96c8.8 0 16 7.2 16 16v16h16v-16c0-8.8 7.2-16 16-16s16 7.2 16 16v16.9c36.3 5.8 64 37.2 64 75.1 0 16.2-5.1 31.3-13.8 43.7 18.1 13.9 29.8 35.8 29.8 60.3 0 42-34 76-76 76h-4v16c0 8.8-7.2 16-16 16s-16-7.2-16-16v-16h-16v16c0 8.8-7.2 16-16 16s-16-7.2-16-16v-16h-13.9c-14.4 0-26.1-11.7-26.1-26.1V152c0-13.3 10.7-24 24-24h16v-16c0-8.8 7.2-16 16-16m-8 80v56h60c15.5 0 28-12.5 28-28s-12.5-28-28-28zm0 104v56h76c15.5 0 28-12.5 28-28s-12.5-28-28-28z"})
);

export default LanCircleBitcoinSolid;
