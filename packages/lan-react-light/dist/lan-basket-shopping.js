import React from 'react';

export function LanBasketShopping({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M288 0c4.6 0 8.9 1.9 11.9 5.3L438.3 160H544c8.8 0 16 7.2 16 16s-7.2 16-16 16h-6.4l-47.3 236.6c-6 29.9-32.2 51.4-62.8 51.4H148.4c-30.5 0-56.8-21.5-62.8-51.4L38.4 192H32c-8.8 0-16-7.2-16-16s7.2-16 16-16h105.7L276.1 5.3c3-3.4 7.4-5.3 11.9-5.3m0 40L180.6 160h214.8zM71 192l46.1 230.3c3 15 16.1 25.7 31.4 25.7h279.1c15.3 0 28.4-10.8 31.4-25.7L505 192zm121 80v96c0 8.8-7.2 16-16 16s-16-7.2-16-16v-96c0-8.8 7.2-16 16-16s16 7.2 16 16m96-16c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16v-96c0-8.8 7.2-16 16-16m128 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16v-96c0-8.8 7.2-16 16-16s16 7.2 16 16"})
  );
}

export default LanBasketShopping;
