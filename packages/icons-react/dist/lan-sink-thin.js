import React from 'react';

export const LanSinkThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M264 72c0-30.9 25.1-56 56-56s56 25.1 56 56v48c0 4.4 3.6 8 8 8s8-3.6 8-8V72c0-39.8-32.2-72-72-72s-72 32.2-72 72v216H144v-24c0-22.1-17.9-40-40-40H40c-4.4 0-8 3.6-8 8s3.6 8 8 8h64c13.3 0 24 10.7 24 24v24H32c-17.7 0-32 14.3-32 32s14.3 32 32 32v56c0 57.4 46.6 104 104 104h240c57.4 0 104-46.6 104-104v-56c17.7 0 32-14.3 32-32s-14.3-32-32-32h-96v-24c0-13.3 10.7-24 24-24h64c4.4 0 8-3.6 8-8s-3.6-8-8-8h-64c-22.1 0-40 17.9-40 40v24H264zm200 280v56c0 48.6-39.4 88-88 88H136c-48.6 0-88-39.4-88-88v-56zM32 304h448c8.8 0 16 7.2 16 16s-7.2 16-16 16H32c-8.8 0-16-7.2-16-16s7.2-16 16-16"})
);

export default LanSinkThin;
