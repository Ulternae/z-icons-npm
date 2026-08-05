import React from 'react';

export function LanSleighThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 640 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M40 32c-4.4 0-8 3.6-8 8s3.6 8 8 8h24v208c0 41.8 26.7 77.4 64 90.5V448H40c-4.4 0-8 3.6-8 8s3.6 8 8 8h536c35.3 0 64-28.7 64-64v-8c0-4.4-3.6-8-8-8s-8 3.6-8 8v8c0 26.5-21.5 48-48 48h-96v-96c53 0 96-43 96-96V112h24c4.4 0 8-3.6 8-8s-3.6-8-8-8h-32c-4.4 0-8 3.6-8 8v24c0 35.3-28.7 64-64 64H392.5c-45 0-86.6-23.6-109.8-62.1l-21.4-35.8C238.2 55.6 196.5 32 151.5 32zm424 416H144v-97.3c5.2.9 10.5 1.3 16 1.3h304zm16-112H160c-44.2 0-80-35.8-80-80V48h71.5c39.3 0 75.8 20.6 96 54.4l21.5 35.7c26 43.4 72.9 69.9 123.5 69.9H496c26.2 0 49.4-12.6 64-32v80c0 44.2-35.8 80-80 80"})
  );
}

export default LanSleighThin;
