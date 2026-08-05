import React from 'react';

export function LanShoppingBasketAlt({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M299.9 5.3c-3-3.4-7.3-5.3-11.9-5.3s-8.9 1.9-11.9 5.3L137.7 160H32c-8.8 0-16 7.2-16 16s7.2 16 16 16h6.4l47.3 236.6c6 29.9 32.2 51.4 62.8 51.4h279.1c30.5 0 56.8-21.5 62.8-51.4L537.7 192h6.4c8.8 0 16-7.2 16-16s-7.2-16-16-16H438.3zM395.4 160H180.6L288 40zM117.1 422.3 71 192h434l-46.1 230.3c-3 15-16.1 25.7-31.4 25.7H148.4c-15.3 0-28.4-10.8-31.4-25.7zM168 288a24 24 0 1 0 0-48 24 24 0 1 0 0 48m264-24a24 24 0 1 0-48 0 24 24 0 1 0 48 0"})
  );
}

export default LanShoppingBasketAlt;
