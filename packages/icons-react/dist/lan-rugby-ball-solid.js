import React from 'react';

export const LanRugbyBallSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M53.8 455.9c-5.4-5.4-9.6-15.1-8.9-32.2.7-17.2 6.4-39.2 17.7-65 22.6-51.4 65.6-113 124.1-171.5S306.9 85.6 358.3 63c25.8-11.3 47.8-17 65-17.7 17.1-.7 26.8 3.5 32.2 8.9s9.6 15.1 8.9 32.2c-.7 17.2-6.4 39.2-17.7 65-22.6 51.4-65.6 113-124.1 171.5S202.4 424.5 151 447.1c-25.8 11.3-47.8 17-65 17.7-17.1.7-26.8-3.5-32.2-8.9m99-302.6C214.5 91.6 280.8 44.7 339 19.1c2.4-1.1 4.8-2.1 7.3-3.1H336C159.3 16 16 159.3 16 336v9.6c.9-2.1 1.8-4.2 2.7-6.2 25.5-58.1 72.4-124.5 134.2-186.2zm343.2 4.5q-2.55 6.45-5.4 12.9c-25.5 58.1-72.4 124.5-134.2 186.2S228.4 465.5 170.3 491c-4 1.7-7.9 3.4-11.9 5H176c176.7 0 320-143.3 320-320z"})
);

export default LanRugbyBallSolid;
