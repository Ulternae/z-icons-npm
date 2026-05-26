import React from 'react';

export const LanInboxArrowDownRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M91.2 80c-8 0-14.8 6-15.9 14l-25 194h85.2c13.4 0 25.9 6.7 33.3 17.8l20.1 30.2h134.3l20.1-30.2c7.4-11.1 19.9-17.8 33.3-17.8h85.2l-25-194c-1-8-7.8-14-15.9-14zM48 416c0 8.8 7.2 16 16 16h384c8.8 0 16-7.2 16-16v-80h-83.2l-20.1 30.2c-7.4 11.1-19.9 17.8-33.3 17.8H184.5c-13.4 0-25.9-6.7-33.3-17.8L131.1 336H47.9v80zM27.7 87.8C31.8 55.9 59 32 91.2 32h329.7c32.2 0 59.4 23.9 63.5 55.8l27.5 213.1.2 1.5v113.5c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64V302.5l.2-1.5L27.7 87.9zM337 233l-64 64c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l23 23V136c0-13.3 10.7-24 24-24s24 10.7 24 24v86.1l23-23c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"})
);

export default LanInboxArrowDownRegular;
