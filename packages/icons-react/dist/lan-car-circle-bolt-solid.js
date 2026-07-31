import React from 'react';

export const LanCarCircleBoltSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M197.4 96h181.2c13.6 0 25.7 8.6 30.2 21.4l8.3 23.8c-31.6 11-60.3 28.4-84.3 50.7H141.1l26.1-74.6c4.5-12.8 16.6-21.4 30.2-21.4zm249.7 86.3c15.6-4.1 32-6.3 48.9-6.3h1.1l-27.9-79.7C455.7 57.8 419.4 32 378.6 32H197.4c-40.8 0-77.1 25.8-90.6 64.3L71.6 196.8C48.4 206.4 32 229.3 32 256v192c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32v-32h182c-3.9-15.3-6-31.4-6-48 0-57.3 25.1-108.8 65-144 14.9-13.1 31.7-24 50.1-32 9.1-4 18.4-7.2 28-9.7M128 272a32 32 0 1 1 0 64 32 32 0 1 1 0-64m368 240a144 144 0 1 0 0-288 144 144 0 1 0 0 288m39-202.4L519.1 352H552c6.8 0 12.8 4.3 15.1 10.7s.2 13.5-5.1 17.8l-80 64c-5.6 4.5-13.6 4.7-19.4.5s-8.1-11.8-5.6-18.6l15.9-42.4H440c-6.8 0-12.8-4.3-15.1-10.7s-.2-13.5 5.1-17.8l80-64c5.6-4.5 13.6-4.7 19.4-.5s8.1 11.8 5.6 18.6"})
);

export default LanCarCircleBoltSolid;
