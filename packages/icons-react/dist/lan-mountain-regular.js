import React from 'react';

export const LanMountainRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 0c14.7 0 28.2 8.1 35.2 21l216 400c6.7 12.4 6.4 27.4-.8 39.5S486.1 480 472 480H40c-14.1 0-27.1-7.4-34.3-19.5s-7.5-27.1-.8-39.5l216-400 2.9-4.6C231.2 6.2 243.2 0 256 0m12 256-40.8 54.4c-4.5 6-11.5 9.5-19 9.6s-14.6-3.4-19.2-9.3l-41.4-53.2L53.4 432h405.2l-95-176zm-95.4-44.7 35.1 45.1 29.2-38.8 1.8-2.2c4.5-4.7 10.8-7.4 17.4-7.4h81.6L256.1 56.8l-83.4 154.5z"})
);

export default LanMountainRegular;
