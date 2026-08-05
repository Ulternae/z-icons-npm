import React from 'react';

export function LanHourglass2Thin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8h24v55.2c0 48.3 23 93.7 61.8 122.4l84.7 62.4-84.7 62.4C55 347 32 392.5 32 440.8V496H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h368c4.4 0 8-3.6 8-8s-3.6-8-8-8h-24v-55.2c0-48.3-23-93.7-61.8-122.4L205.5 256l84.7-62.4C329 165 352 119.5 352 71.2V16h24c4.4 0 8-3.6 8-8s-3.6-8-8-8zm328 16v55.2c0 19.9-4.3 39.2-12.4 56.8H60.4C52.3 110.4 48 91.1 48 71.2V16zm-21.1 128c-8.9 14.1-20.5 26.6-34.2 36.7L192 246l-88.7-65.3C89.6 170.6 78 158.1 69.1 144zM192 265.9l88.7 65.3c28 20.7 46.8 51.1 53.1 84.7l-283.5.1c6.2-33.7 25-64.1 53.1-84.7zM48 440.8c0-2.9.1-5.9.3-8.8h287.4c.2 2.9.3 5.8.3 8.8V496H48z"})
  );
}

export default LanHourglass2Thin;
