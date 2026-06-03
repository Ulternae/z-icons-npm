import React from 'react';

export const LanSquareDashedCirclePlusRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M144 56c0 13.3-10.7 24-24 24-22.1 0-40 17.9-40 40 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6 39.4-88 88-88 13.3 0 24 10.7 24 24M32 216c0-13.3 10.7-24 24-24s24 10.7 24 24v80c0 13.3-10.7 24-24 24s-24-10.7-24-24zm24 152c13.3 0 24 10.7 24 24 0 22.1 17.9 40 40 40h122.7c2.8 16.8 7.8 32.9 14.8 48H120c-48.6 0-88-39.4-88-88 0-13.3 10.7-24 24-24m424-154c-15.3-3.9-31.4-6-48-6v-88c0-22.1-17.9-40-40-40-13.3 0-24-10.7-24-24s10.7-24 24-24c48.6 0 88 39.4 88 88zM296 80h-80c-13.3 0-24-10.7-24-24s10.7-24 24-24h80c13.3 0 24 10.7 24 24s-10.7 24-24 24m-8 320a144 144 0 1 1 288 0 144 144 0 1 1-288 0m144-80c-8.8 0-16 7.2-16 16v48h-48c-8.8 0-16 7.2-16 16s7.2 16 16 16h48v48c0 8.8 7.2 16 16 16s16-7.2 16-16v-48h48c8.8 0 16-7.2 16-16s-7.2-16-16-16h-48v-48c0-8.8-7.2-16-16-16"})
);

export default LanSquareDashedCirclePlusRegular;
