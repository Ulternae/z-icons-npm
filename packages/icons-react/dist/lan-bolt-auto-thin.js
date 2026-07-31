import React from 'react';

export const LanBoltAutoThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"m259.5 217.3 75-162.6c3.1-6.8 1.2-14.8-4.7-19.3s-14.1-4.5-19.9.2l-256 208c-5.3 4.3-7.3 11.4-5 17.8S57.2 272 64 272h110c5.5 0 10.5 2.8 13.5 7.4s3.3 10.4 1 15.3l-75 162.6c-3.1 6.8-1.2 14.8 4.7 19.3s14.1 4.5 19.9-.2l256-208c5.3-4.3 7.3-11.4 5-17.8S390.8 240 384 240H274c-5.5 0-10.5-2.8-13.5-7.4s-3.3-10.4-1-15.3m89.6-155.9L281.4 208l-7.4 16h110c13.5 0 25.6 8.5 30.2 21.3s.5 27-10 35.5l-256 208c-11.6 9.4-28.1 9.6-39.8.4S92.7 464 99 450.5l67.7-146.6 7.4-16h-110c-13.5 0-25.6-8.5-30.2-21.3s-.5-27 10-35.5l256-208c11.6-9.4 28.1-9.6 39.8-.4s15.7 25.2 9.4 38.7M464 288c3.2 0 6.1 1.9 7.4 4.9l88 208c1.7 4.1-.2 8.8-4.2 10.5s-8.8-.2-10.5-4.2l-25-59.1H408.5l-25 59.1c-1.7 4.1-6.4 6-10.5 4.2s-6-6.4-4.3-10.5l88-208c1.3-3 4.2-4.9 7.4-4.9zm0 28.5L415.1 432h97.8z"})
);

export default LanBoltAutoThin;
