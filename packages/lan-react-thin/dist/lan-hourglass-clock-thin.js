import React from 'react';

export function LanHourglassClockThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 544',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M40 0c-4.4 0-8 3.6-8 8s3.6 8 8 8h24v55.2c0 48.3 23 93.7 61.8 122.4l84.7 62.4-84.7 62.4C87 347 64 392.5 64 440.8V496H40c-4.4 0-8 3.6-8 8s3.6 8 8 8h236c-3.7-5.1-7.2-10.5-10.3-16H80v-55.2c0-43.2 20.5-83.9 55.3-109.5L224 266l44.7 33c2.8-4.5 5.8-9 9-13.2l-40.3-29.7 84.7-62.4C361 165 384 119.5 384 71.2V16h24c4.4 0 8-3.6 8-8s-3.6-8-8-8zm328 16v55.2c0 43.2-20.5 83.9-55.3 109.5L224 246l-88.7-65.3C100.5 155.1 80 114.4 80 71.2V16zm64 256a128 128 0 1 1 0 256 128 128 0 1 1 0-256m0 272a144 144 0 1 0 0-288 144 144 0 1 0 0 288m0-224c-4.4 0-8 3.6-8 8v72c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8s-3.6-8-8-8h-48v-64c0-4.4-3.6-8-8-8"})
  );
}

export default LanHourglassClockThin;
