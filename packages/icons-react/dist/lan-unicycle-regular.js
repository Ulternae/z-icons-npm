import React from 'react';

export const LanUnicycleRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M88 0c13.3 0 24 10.7 24 24s10.7 24 24 24h128c13.3 0 24 10.7 24 24s-10.7 24-24 24h-48v65.6c85.8 11.7 152 85.3 152 174.4 0 97.2-78.8 176-176 176S16 433.2 16 336c0-89.1 66.2-162.7 152-174.4V96h-32c-39.8 0-72-32.2-72-72C64 10.7 74.7 0 88 0m80 210.2C108.8 221.4 64 273.5 64 336c0 70.7 57.3 128 128 128s128-57.3 128-128c0-62.5-44.8-114.5-104-125.8V352c0 13.3-10.7 24-24 24s-24-10.7-24-24z"})
);

export default LanUnicycleRegular;
