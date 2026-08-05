import React from 'react';

export function Lan2({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M48 48c0-8.8 7.2-16 16-16h197.9c54.2 0 98.1 43.9 98.1 98.1 0 39.1-23.2 74.5-59.1 90l-169.4 73.2C90.5 311 64 351.4 64 396.1V448h272c8.8 0 16 7.2 16 16s-7.2 16-16 16H48c-8.8 0-16-7.2-16-16v-67.9c0-57.4 34.1-109.4 86.8-132.2l169.3-73.2c24.2-10.5 39.8-34.3 39.8-60.6 0-36.5-29.6-66.1-66.1-66.1H64c-8.8 0-16-7.2-16-16"})
  );
}

export default Lan2;
