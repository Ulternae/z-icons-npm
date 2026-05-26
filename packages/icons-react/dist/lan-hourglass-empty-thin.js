import React from 'react';

export const LanHourglassEmptyThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8h24v55.2c0 48.3 23 93.7 61.8 122.4l84.7 62.4-84.7 62.4C55 347 32 392.5 32 440.8V496H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h368c4.4 0 8-3.6 8-8s-3.6-8-8-8h-24v-55.2c0-48.3-23-93.7-61.8-122.4L205.5 256l84.7-62.4C329 165 352 119.5 352 71.2V16h24c4.4 0 8-3.6 8-8s-3.6-8-8-8zm328 16v55.2c0 43.2-20.5 83.9-55.3 109.5L192 246l-88.7-65.3C68.5 155.1 48 114.4 48 71.2V16zM192 265.9l88.7 65.3c34.8 25.6 55.3 66.3 55.3 109.5v55.2H48v-55.2c0-43.2 20.5-83.9 55.3-109.5z"})
);

export default LanHourglassEmptyThin;
