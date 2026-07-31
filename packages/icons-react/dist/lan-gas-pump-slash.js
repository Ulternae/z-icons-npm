import React from 'react';

export const LanGasPumpSlash = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -31.85 576 575.9',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M27.3-27.2c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l544 544c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-69.2-69.2c23.6-3 41.9-23.2 41.9-47.6V157.1c0-17.9-7.5-35.1-20.8-47.2l-80.4-73.7c-6.5-6-16.6-5.5-22.6 1s-5.5 16.6 1 22.6L448 84.4V160c0 35.3 28.7 64 64 64v176c0 8.8-7.2 16-16 16h-25.5L352 297.5V64c0-35.3-28.7-64-64-64H128c-20.1 0-38 9.3-49.7 23.7zm73.8 73.8C106.8 37.8 116.7 32 128 32h160c17.7 0 32 14.3 32 32v201.5zM64 480c-8.8 0-16 7.2-16 16s7.2 16 16 16h288c8.8 0 16-7.2 16-16s-7.2-16-16-16v-69.5l-32-32V480H96V154.5l-32-32zm416-366.3 21.6 19.8c6.6 6.1 10.4 14.6 10.4 23.6V192c-17.7 0-32-14.3-32-32z"})
);

export default LanGasPumpSlash;
