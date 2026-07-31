import React from 'react';

export const NeoLaptopSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 616 560',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M56 280v-56c0-35.6 1.7-65.9 7.2-91.2 5.5-25.6 15.2-47.8 32.5-65.1s39.5-27 65.1-32.5c25.3-5.5 55.6-7.2 91.2-7.2h112c35.6 0 65.9 1.7 91.2 7.2 25.6 5.5 47.8 15.2 65.1 32.5s27 39.5 32.5 65.1c5.5 25.3 7.2 55.7 7.2 91.2v56c0 15.3-12.7 28-28 28H84c-15.3 0-28-12.7-28-28M0 440c0 23.7 13.7 48.8 41.5 56.2C76.1 505.4 151.7 518 308 518s231.9-12.6 266.5-21.8c27.8-7.4 41.5-32.5 41.5-56.2s-5-48.2-27.5-62.9c-19.1-12.6-43.7-13.1-65.8-13.1H93.3c-22.1 0-46.6.5-65.8 13.1C5 391.8 0 416.3 0 440"})
);

export default NeoLaptopSolid;
