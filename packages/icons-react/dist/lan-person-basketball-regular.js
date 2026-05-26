import React from 'react';

export const LanPersonBasketballRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M240 96a56 56 0 1 0 0-112 56 56 0 1 0 0 112M99.3 187.9c1.4-2.4 4-3.9 6.9-3.9h33.2l-32.9 87.9c-7.9 20.9-7.4 44.1 1.2 64.7l22.4 54.1L11 467.8C-.2 475-3.3 489.9 3.9 501s22.1 14.3 33.2 7.1l124.8-80.7c16.2-10.5 22.6-31.1 15.2-49l-11-26.4H229l35.8 15.9c2.1 1 3.8 2.8 4.4 5.1L305 494.8c3.7 12.7 17.1 20 29.8 16.3s20-17.1 16.3-29.8l-35.9-121.9c-4.6-15.8-16-28.7-31-35.4l-38.9-17.3 25.2-80.7 7.8 21.5c4.9 13.4 16.4 23.1 30.4 25.7l79 14.4c13 2.4 25.5-6.3 27.9-19.3s-6.3-25.5-19.3-27.9l-74.4-13.5-8.1-22.4c-14.9-41.1-54-68.5-97.7-68.5H106.3c-19.7 0-37.9 10.3-48 27.2l-38.9 64.5c-6.8 11.4-3.1 26.1 8.2 32.9s26.1 3.1 32.9-8.2l38.7-64.5zM195.9 304h-47c-.2-5.2.7-10.4 2.5-15.3l39.1-104.3.2-.4H216c5.7 0 11.3.9 16.6 2.5zM448 448a64 64 0 1 0 0-128 64 64 0 1 0 0 128"})
);

export default LanPersonBasketballRegular;
