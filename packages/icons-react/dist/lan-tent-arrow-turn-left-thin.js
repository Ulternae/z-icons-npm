import React from 'react';

export const LanTentArrowTurnLeftThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M2.3 101.7c-3.1-3.1-3.1-8.2 0-11.3l72-72c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3L27.3 88H440c39.8 0 72 32.2 72 72v24c0 4.4-3.6 8-8 8s-8-3.6-8-8v-24c0-30.9-25.1-56-56-56H27.3l58.3 58.3c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0l-72-72zm75.4 188-25 188.2c-1.3 9.6 6.2 18.1 15.9 18.1H248V183.2h-.1L85.5 277.9c-4.3 2.5-7.1 6.8-7.8 11.7zM264 183.2v102.7L380.7 496h62.7c9.7 0 17.1-8.5 15.9-18.1l-25.1-188.3c-.7-4.9-3.5-9.2-7.8-11.7l-162.3-94.7zm0 135.7V496h98.4zM36.8 475.8l25.1-188.3c1.3-9.8 7.1-18.4 15.6-23.4l162.4-94.7c10-5.8 22.3-5.8 32.2 0l162.4 94.7c8.5 5 14.3 13.6 15.6 23.4l25.1 188.2c2.6 19.2-12.4 36.2-31.7 36.2l-375 .1c-19.4 0-34.3-17-31.7-36.2"})
);

export default LanTentArrowTurnLeftThin;
