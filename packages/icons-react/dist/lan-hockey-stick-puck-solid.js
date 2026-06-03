import React from 'react';

export const LanHockeyStickPuckSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -31.962 640 544.062',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M128 512H96c-17.7 0-32-14.3-32-32V352c0-17.7 14.3-32 32-32h32zM481.7-10.1c5.6-16.8 23.7-25.8 40.5-20.2S548-6.6 542.4 10.2L389.7 468.3c-8.7 26.1-33.2 43.8-60.7 43.8H176.1v-192h195.6L481.8-10zM608 416c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32v-32c0-17.7 14.3-32 32-32z"})
);

export default LanHockeyStickPuckSolid;
