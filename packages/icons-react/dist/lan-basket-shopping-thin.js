import React from 'react';

export const LanBasketShoppingThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M288 0c2.3 0 4.4 1 6 2.7L434.7 160H552c4.4 0 8 3.6 8 8s-3.6 8-8 8h-11.2l-50.5 252.6c-6 29.9-32.2 51.4-62.8 51.4H148.4c-30.5 0-56.8-21.5-62.8-51.4L35.2 176H24c-4.4 0-8-3.6-8-8s3.6-8 8-8h117.3L282.1 2.7C283.6 1 285.7 0 288 0m0 20L162.7 160h250.6zM51.5 176l49.9 249.4c4.5 22.4 24.2 38.6 47.1 38.6h279.1c22.9 0 42.6-16.2 47.1-38.6L524.6 176h-473zM192 264v112c0 4.4-3.6 8-8 8s-8-3.6-8-8V264c0-4.4 3.6-8 8-8s8 3.6 8 8m96-8c4.4 0 8 3.6 8 8v112c0 4.4-3.6 8-8 8s-8-3.6-8-8V264c0-4.4 3.6-8 8-8m112 8v112c0 4.4-3.6 8-8 8s-8-3.6-8-8V264c0-4.4 3.6-8 8-8s8 3.6 8 8"})
);

export default LanBasketShoppingThin;
