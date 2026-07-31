import React from 'react';

export const LanScrollRibbonRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M81.7 336c-1.5-.8-7.5-4.6-15.3-20.3C55.9 294.7 48 262.4 48 224s7.9-70.7 18.4-91.7c7.8-15.7 13.8-19.5 15.3-20.3h476.7c1.5.8 7.5 4.6 15.3 20.3 10.5 21 18.4 53.3 18.4 91.7s-7.9 70.7-18.4 91.7c-7.8 15.7-13.8 19.5-15.3 20.3h-69c-4.9 17.2-12.3 33.4-21.8 48h92.5c44.2 0 80-71.6 80-160S604.2 64 560 64H80C35.8 64 0 135.6 0 224s35.8 160 80 160h92.5c-9.5-14.6-17-30.8-21.8-48zM448 288c0-70.7-57.3-128-128-128s-128 57.3-128 128c0 32.6 12.2 62.3 32.2 84.9-.1 1-.2 2.1-.2 3.1v116.2c0 10.9 8.9 19.8 19.8 19.8 2.8 0 5.5-.6 8-1.7L320 480l68.2 30.3c2.5 1.1 5.3 1.7 8 1.7 10.9 0 19.8-8.9 19.8-19.8V376c0-1.1-.1-2.1-.2-3.1 20-22.6 32.2-52.3 32.2-84.9m-128-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96"})
);

export default LanScrollRibbonRegular;
