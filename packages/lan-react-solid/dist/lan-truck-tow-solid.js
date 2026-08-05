import React from 'react';

export function LanTruckTowSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -32 640 544',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"m144 64 48 192H96c-35.3 0-64 28.7-64 64v64c0 35.3 28.7 64 64 64h3.3c10.4 36.9 44.4 64 84.7 64s74.2-27.1 84.7-64h102.6c10.4 36.9 44.4 64 84.7 64s74.2-27.1 84.7-64h3.3c35.3 0 64-28.7 64-64V265.2c0-6.1-1.2-12.2-3.4-17.8l-48.5-121.2c-7.3-18.3-25-30.2-44.6-30.2H400c-26.5 0-48 21.5-48 48v108.8l-203.1-273c-5.6-7.4-14.3-11.8-23.6-11.8C109.1-32 96-18.9 96-2.7V128c0 8.8-7.2 16-16 16s-16-7.2-16-16v-8c0-13.3-10.7-24-24-24s-24 10.7-24 24v8c0 35.3 28.7 64 64 64s64-28.7 64-64zm392 192H416v-96h84.7l38.4 96.1c-1 0-2.1-.1-3.1-.1M144 424a40 40 0 1 1 80 0 40 40 0 1 1-80 0m312-40a40 40 0 1 1 0 80 40 40 0 1 1 0-80"})
  );
}

export default LanTruckTowSolid;
