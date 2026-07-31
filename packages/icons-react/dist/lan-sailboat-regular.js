import React from 'react';

export const LanSailboatRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M240 35.9V384H16c-8.8 0-16 7.2-16 16 0 61.9 50.1 112 112 112h288c61.9 0 112-50.1 112-112 0-8.8-7.2-16-16-16H288v-48h161.7c12.9 0 20.5-14.4 13.2-25L269.2 26.9c-8.9-13-29.2-6.7-29.2 9M112 464c-23.7 0-44.4-12.9-55.4-32h398.9c-11.1 19.1-31.7 32-55.4 32h-288zm80-144V135.8c0-16.1-21-22.1-29.6-8.5L47.3 311.5c-6.7 10.7 1 24.5 13.6 24.5H176c8.8 0 16-7.2 16-16"})
);

export default LanSailboatRegular;
