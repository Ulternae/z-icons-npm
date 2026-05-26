import React from 'react';

export const LanWatchFitnessRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"m123 16-5.3 48h148.7l-5.3-48zm185.8-5.3 6 54c39 5.3 69.2 38.8 69.2 79.3v224c0 40.5-30.2 74-69.3 79.3l-6 54C306 525.6 285.5 544 261 544H123c-24.5 0-45-18.4-47.7-42.7l-6-54C30.2 442 0 408.5 0 368V144c0-40.5 30.2-74 69.3-79.3l6-54C78-13.6 98.5-32 123-32h138c24.5 0 45 18.4 47.7 42.7zM117.6 448l5.3 48H261l5.3-48zM304 112H80c-17.7 0-32 14.3-32 32v224c0 17.7 14.3 32 32 32h224c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32m-121.1 78.9 9.1 9.1 9.1-9.1c9.5-9.5 22.5-14.9 36-14.9h2.9c26.5 0 48 21.5 48 48 0 53.4-66.9 95.7-89 108.2-4.4 2.5-9.6 2.5-14 0-22.1-12.5-89-54.8-89-108.2 0-26.5 21.5-48 48-48h2.9c13.5 0 26.5 5.4 36 14.9"})
);

export default LanWatchFitnessRegular;
