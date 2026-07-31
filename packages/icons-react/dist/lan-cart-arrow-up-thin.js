import React from 'react';

export const LanCartArrowUpThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"m341.7 2.3 72 72c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0L344 27.3V184c0 4.4-3.6 8-8 8s-8-3.6-8-8V27.3l-58.3 58.3c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l72-72c3.1-3.1 8.2-3.1 11.3 0M0 8c0-4.4 3.6-8 8-8h45.7c19.1 0 35.5 13.5 39.2 32.3L139.8 272h308.7c33.5 0 62.5-23.1 70.1-55.6l41.6-178.2c1-4.3 5.3-7 9.6-6s7 5.3 6 9.6L534.2 220c-9.3 39.8-44.8 68-85.7 68H142.9l9.3 47.7a39.97 39.97 0 0 0 39.3 32.3H488c4.4 0 8 3.6 8 8s-3.6 8-8 8H191.5c-26.8 0-49.8-19-55-45.2L77.2 35.4C75 24.1 65.1 16 53.7 16H8c-4.4 0-8-3.6-8-8m208 488a32 32 0 1 0 0-64 32 32 0 1 0 0 64m0-80a48 48 0 1 1 0 96 48 48 0 1 1 0-96m256 48a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-80 0a48 48 0 1 1 96 0 48 48 0 1 1-96 0"})
);

export default LanCartArrowUpThin;
