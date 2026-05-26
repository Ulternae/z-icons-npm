import React from 'react';

export const LanShoppingBasketAltThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M294 2.7C292.4 1 290.3 0 288 0s-4.4 1-6 2.7L141.2 160H23.9c-4.4 0-8 3.6-8 8s3.6 8 8 8h11.2l50.5 252.6c6 29.9 32.2 51.4 62.8 51.4h279.1c30.5 0 56.8-21.5 62.8-51.4L540.8 176H552c4.4 0 8-3.6 8-8s-3.6-8-8-8H434.7zM413.3 160H162.7L288 20zM101.4 425.4 51.5 176h473l-49.9 249.4c-4.5 22.4-24.2 38.6-47.1 38.6H148.4c-22.9 0-42.6-16.2-47.1-38.6zM176 288a16 16 0 1 0 0-32 16 16 0 1 0 0 32m240-16a16 16 0 1 0-32 0 16 16 0 1 0 32 0"})
);

export default LanShoppingBasketAltThin;
