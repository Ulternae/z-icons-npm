import React from 'react';

export const LanAirplayAudioSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M48 256c0 53.1 19.9 101.5 52.6 138.3l-34 34C25.2 382.8 0 322.3 0 256 0 114.6 114.6 0 256 0s256 114.6 256 256c0 66.3-25.2 126.8-66.6 172.2l-34-34C444.1 357.5 464 309.1 464 256c0-114.9-93.1-208-208-208S48 141.1 48 256m368 0c0 39.8-14.5 76.2-38.6 104.2l-34.1-34.1c15.4-19.2 24.7-43.6 24.7-70.2 0-61.9-50.1-112-112-112S144 194.1 144 256c0 26.6 9.2 51 24.7 70.2l-34.1 34.1C110.5 332.2 96 295.8 96 256c0-88.4 71.6-160 160-160s160 71.6 160 160m-224 0c0-35.3 28.7-64 64-64s64 28.7 64 64c0 13.4-4.1 25.7-11.1 36-30.2-26.7-75.7-26.7-105.8 0-7-10.3-11.1-22.7-11.1-36M98.4 492.2c-5-12-2.2-25.7 6.9-34.9l128-128c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9S396.9 512 384 512H128c-12.9 0-24.6-7.8-29.6-19.8"})
);

export default LanAirplayAudioSolid;
