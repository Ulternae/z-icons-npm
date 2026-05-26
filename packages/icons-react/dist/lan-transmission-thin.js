import React from 'react';

export const LanTransmissionThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M448 0c35.3 0 64 28.7 64 64 0 32.6-24.4 59.5-56 63.4V224c0 22.1-17.9 40-40 40H264v120.6c31.6 3.9 56 30.8 56 63.4 0 35.3-28.7 64-64 64s-64-28.7-64-64c0-32.6 24.4-59.5 56-63.4V264H72v120.6c31.6 3.9 56 30.8 56 63.4 0 35.3-28.7 64-64 64S0 483.3 0 448c0-32.6 24.4-59.5 56-63.4V127.4C24.4 123.5 0 96.6 0 64 0 28.7 28.7 0 64 0s64 28.7 64 64c0 32.6-24.4 59.5-56 63.4V248h176V127.4c-31.6-3.9-56-30.8-56-63.4 0-35.3 28.7-64 64-64s64 28.7 64 64c0 32.6-24.4 59.5-56 63.4V248h152c13.3 0 24-10.7 24-24v-96.6c-31.6-3.9-56-30.8-56-63.4 0-35.3 28.7-64 64-64M64 400a48 48 0 1 0 0 96 48 48 0 1 0 0-96m192 0a48 48 0 1 0 0 96 48 48 0 1 0 0-96M448 16a48 48 0 1 0 0 96 48 48 0 1 0 0-96M64 16a48 48 0 1 0 0 96 48 48 0 1 0 0-96m192 0a48 48 0 1 0 0 96 48 48 0 1 0 0-96"})
);

export default LanTransmissionThin;
