import React from 'react';

export const LanGolfClubSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32.059 576.059 544.059',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M515.8-15.1c8.3-15.6 27.7-21.5 43.3-13.2s21.5 27.8 13.2 43.4L329.8 469.7c-13.9 26.1-41.1 42.3-70.6 42.3H64c-17.7 0-32-14.3-32-32v-24h44c11 0 20-9 20-20s-9-20-20-20H32v-32h44c11 0 20-9 20-20s-9-20-20-20H32v-24l.2-3.7c1-8.5 5.3-16.3 12.1-21.6 7.8-6.1 17.9-8.2 27.4-5.8l248.8 62.2z"})
);

export default LanGolfClubSolid;
