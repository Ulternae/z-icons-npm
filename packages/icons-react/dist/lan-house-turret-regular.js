import React from 'react';

export const LanHouseTurretRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M312 48h32v40c0 13.3 10.7 24 24 24s24-10.7 24-24V48h48v40c0 13.3 10.7 24 24 24s24-10.7 24-24V48h32c4.4 0 8 3.6 8 8v384c0 13.3-10.7 24-24 24h-73.1c-2.5 17.7-9.2 34-18.9 48h92.1c39.8 0 72-32.2 72-72V56c0-30.9-25.1-56-56-56H312c-30.9 0-56 25.1-56 56v10.3l48 41.7V55.9c0-4.4 3.6-8 8-8zm-88.2 53.9c-9-7.9-22.5-7.9-31.5 0l-184 160c-10 8.7-11.1 23.9-2.4 33.9 6.7 7.7 17.1 10.1 26.1 6.9V448c0 35.3 28.7 64 64 64h224c35.3 0 64-28.7 64-64V302.6c9 3.2 19.5.8 26.1-6.9 8.7-10 7.6-25.2-2.4-33.9l-184-160zM336 263.1V448c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V263.1l128-111.3zM160 296v48c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24v-48c0-13.3-10.7-24-24-24h-48c-13.3 0-24 10.7-24 24"})
);

export default LanHouseTurretRegular;
