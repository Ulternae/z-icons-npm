import React from 'react';

export function LanShirtLongSleeveRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M140.7 0C94 0 53.1 31 40.5 76L3.3 209.1C1.1 216.8 0 224.8 0 232.8V408c0 22.1 17.9 40 40 40h56v8c0 30.9 25.1 56 56 56h208c30.9 0 56-25.1 56-56v-8h56c22.1 0 40-17.9 40-40V232.8c0-8-1.1-16-3.3-23.7L471.5 76C458.9 31 418 0 371.3 0zM96 216v184H48V232.8c0-3.6.5-7.3 1.5-10.8L86.8 88.9C93.5 64.7 115.6 48 140.7 48h14.1c10.8 45.9 52 80 101.2 80s90.4-34.1 101.2-80h14.1c25.1 0 47.2 16.7 53.9 40.9L462.5 222q1.5 5.25 1.5 10.8V400h-48V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v240c0 4.4-3.6 8-8 8H152c-4.4 0-8-3.6-8-8V216c0-13.3-10.7-24-24-24s-24 10.7-24 24M306.6 48c-9 18.9-28.3 32-50.6 32s-41.6-13.1-50.6-32z"})
  );
}

export default LanShirtLongSleeveRegular;
