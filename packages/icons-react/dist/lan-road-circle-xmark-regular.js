import React from 'react';

export const LanRoadCircleXmarkRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"m201.5 91.6-88.2 312c-.6 2-.8 4-.8 6.1 0 12.3 10 22.3 22.3 22.3h172.4c2.8 16.8 7.8 32.9 14.8 48H134.9c-38.8 0-70.3-31.5-70.3-70.3 0-6.5.9-12.9 2.6-19.1l88.2-312C163.1 51 188.3 32 216.9 32h207.2c28.6 0 53.8 19 61.6 46.6l37.1 131.2c-8.6-1.2-17.3-1.8-26.3-1.8q-12 0-23.7 1.5L439.5 91.6c-1.9-6.9-8.2-11.6-15.4-11.6h-79.5v40c0 13.3-10.7 24-24 24s-24-10.7-24-24V80h-79.7c-7.2 0-13.4 4.8-15.4 11.6M321.9 320h-1.3c-13.3 0-24-10.7-24-24v-80c0-13.3 10.7-24 24-24s24 10.7 24 24v66.5c-8.9 11.5-16.5 24-22.7 37.4zm174.6-64a144 144 0 1 1 0 288 144 144 0 1 1 0-288m59.3 107.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0l-36.7 36.7-36.7-36.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l36.7 36.7-36.7 36.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l36.7-36.7 36.7 36.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L519.1 400z"})
);

export default LanRoadCircleXmarkRegular;
