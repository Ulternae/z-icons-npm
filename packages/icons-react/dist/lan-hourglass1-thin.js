import React from 'react';

export const LanHourglass1Thin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M0 8c0-4.4 3.6-8 8-8h368c4.4 0 8 3.6 8 8s-3.6 8-8 8h-24v55.2c0 48.3-23 93.7-61.8 122.4L205.5 256l84.7 62.4C329 347 352 392.5 352 440.8V496h24c4.4 0 8 3.6 8 8s-3.6 8-8 8H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h24v-55.2c0-48.3 23-93.7 61.8-122.4l84.7-62.4-84.7-62.4C55 165 32 119.5 32 71.2V16H8c-4.4 0-8-3.6-8-8m48 8v48h288V16zm.3 64c2.6 39.9 22.6 76.8 55 100.7L192 246l88.7-65.3c32.4-23.9 52.5-60.8 55-100.7zm55 251.3C68.5 356.9 48 397.6 48 440.8V496h288v-55.2c0-43.2-20.5-83.9-55.3-109.5L192 266z"})
);

export default LanHourglass1Thin;
