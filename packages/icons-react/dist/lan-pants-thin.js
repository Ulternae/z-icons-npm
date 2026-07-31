import React from 'react';

export const LanPantsThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 536.807',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M88.4 39.2C92.6 16.5 112.4 0 135.6 0h241.6c23.1 0 43 16.5 47.2 39.2L503.5 464c4.9 26.1-12.4 51.2-38.6 56l-87.7 16c-25.4 4.6-49.9-11.6-55.5-36.8l-65.3-294.3-65.3 294.3c-5.6 25.2-30.1 41.5-55.5 36.8l-87.7-16c-26.1-4.8-43.4-29.9-38.5-56zM135.6 16c-15.4 0-28.6 11-31.5 26.1L94.1 96h58.3c4.4 0 8 3.6 8 8s-3.6 8-8 8H91.1L25 466.9c-3.2 17.4 8.3 34.1 25.7 37.3l87.8 16.1c16.9 3.1 33.3-7.7 37-24.5l73.1-329.5c.8-3.7 4.1-6.3 7.8-6.3s7 2.6 7.8 6.3l73.1 329.5c3.7 16.8 20.1 27.6 37 24.5l87.8-16.1c17.4-3.2 28.9-19.9 25.7-37.3L421.7 112h-61.3c-4.4 0-8-3.6-8-8s3.6-8 8-8h58.3l-10-53.9C405.9 27 392.7 16 377.2 16z"})
);

export default LanPantsThin;
