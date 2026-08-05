import React from 'react';

export function LanChartUser({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 640 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M192 64h352c17.7 0 32 14.3 32 32v288c0 17.7-14.3 32-32 32H322.1c4.8 10.1 8.5 20.8 10.9 32h211c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H192c-35.3 0-64 28.7-64 64v49c5.2-.7 10.6-1 16-1s10.8.3 16 1V96c0-17.7 14.3-32 32-32m208 64c-8.8 0-16 7.2-16 16s7.2 16 16 16h57.4L352 265.4l-36.7-36.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l48 48c3 3 7.1 4.7 11.3 4.7s8.3-1.7 11.3-4.7L480 182.6V240c0 8.8 7.2 16 16 16s16-7.2 16-16v-96c0-8.8-7.2-16-16-16zm-256 96a48 48 0 1 1 0 96 48 48 0 1 1 0-96m0 128a80 80 0 1 0 0-160 80 80 0 1 0 0 160M0 480v16c0 8.8 7.2 16 16 16s16-7.2 16-16v-16c0-35.3 28.7-64 64-64h96c35.3 0 64 28.7 64 64v16c0 8.8 7.2 16 16 16s16-7.2 16-16v-16c0-53-43-96-96-96H96c-53 0-96 43-96 96"})
  );
}

export default LanChartUser;
