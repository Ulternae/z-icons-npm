import React from 'react';

export const LanRocketLaunchSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M57 288h103.5c35.3 0 64 28.7 64 64v103.5c0 24.9 27.1 40.2 48.5 27.4l88.2-52.9c14.5-8.7 23.3-24.3 23.3-41.2v-95c128.9-76 135.4-189.5 124.3-265.4-1.9-12.8-11.9-22.8-24.7-24.7C408.2-7.4 294.7-.9 218.6 128h-95c-16.9 0-32.5 8.8-41.2 23.3l-52.8 88.2C16.8 260.9 32.1 288 57 288M384.5 80a48 48 0 1 1 0 96 48 48 0 1 1 0-96M152.9 473.6c31.5-31.5 31.5-82.5 0-114s-82.5-31.5-114 0C7.6 390.9 1.4 451.6.6 486c-.4 14.6 11.2 26.2 25.9 25.9 34.5-.8 95.1-7 126.4-38.3m-40.6-32c-10.1 10.1-28.5 13-41.3 13.7-8 .5-14.3-5.9-13.9-13.9.7-12.8 3.7-31.2 13.7-41.3 11.4-11.4 30-11.4 41.4 0s11.4 30 0 41.4z"})
);

export default LanRocketLaunchSolid;
