import React from 'react';

export function LanSirenThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M48 336c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h352c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32zm96.8-16h246.3L359.7 89.5C356.5 65.7 336.1 48 312.1 48H135.9c-24 0-44.3 17.7-47.6 41.5L56.9 320h71.9L144 167.2c.4-4.4 4.4-7.6 8.8-7.2s7.6 4.4 7.2 8.8zM375.5 87.4l31.8 233.2c23 3.5 40.6 23.4 40.6 47.4v64c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48v-64c0-24 17.6-43.9 40.7-47.4L72.5 87.4C76.8 55.6 103.9 32 135.9 32h176.3c32 0 59.1 23.6 63.4 55.4z"})
  );
}

export default LanSirenThin;
