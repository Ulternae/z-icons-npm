import React from 'react';

export const LanPizzaSliceThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M168.6 16.8c-14.4-1-27.2 8.9-30.9 22.9l-13 48.6c162.2 6.5 292.5 136.8 299 299l48.5-12.9c14.1-3.7 23.9-16.5 22.9-30.9C483 168.7 343.3 29 168.5 16.9zM16 496l391.9-104.5c-4.4-156.7-130.7-283-287.4-287.4zM122.2 35.6C127.7 14.8 146.9-.7 169.7.9c182.8 12.6 328.8 158.6 341.4 341.4 1.6 22.8-14 41.9-34.7 47.5L20.1 511.5c-5.5 1.5-11.4-.1-15.4-4.1S-.9 497.5.6 492zM176 200a40 40 0 1 1 0 80 40 40 0 1 1 0-80m24 40a24 24 0 1 0-48 0 24 24 0 1 0 48 0m32 96a40 40 0 1 1 80 0 40 40 0 1 1-80 0m40 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48m-128-32a40 40 0 1 1 0 80 40 40 0 1 1 0-80m24 40a24 24 0 1 0-48 0 24 24 0 1 0 48 0"})
);

export default LanPizzaSliceThin;
