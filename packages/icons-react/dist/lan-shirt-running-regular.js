import React from 'react';

export const LanShirtRunningRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M88 0c13.3 0 24 10.7 24 24v48c0 44.2 35.8 80 80 80s80-35.8 80-80V24c0-13.3 10.7-24 24-24s24 10.7 24 24c0 127.9 26.8 181 41.5 200.5 9.6 12.8 22.5 32.8 22.5 56.3V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V280.7c0-23.5 12.9-43.5 22.5-56.2C37.2 205 64 151.9 64 24 64 10.7 74.7 0 88 0M60.8 253.4C52.2 264.8 48 273.9 48 280.7v110.1l251.3-181.5c-5.4-13.6-10.4-29.8-14.6-49.1-23.3 24.5-56.2 39.8-92.7 39.8s-69.4-15.3-92.7-39.8c-10.3 46.7-25.2 75.5-38.5 93.2M48.1 450c1 7.9 7.7 14 15.9 14h256c8.8 0 16-7.2 16-16V280.7c0-6.8-4.2-15.9-12.8-27.3-.3-.4-.7-.9-1-1.4z"})
);

export default LanShirtRunningRegular;
