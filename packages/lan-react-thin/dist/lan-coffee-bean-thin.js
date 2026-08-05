import React from 'react';

export function LanCoffeeBeanThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"m33.2 377.6 38-43.8C109.6 289.5 165.4 264 224 264c63.3 0 123.5-27.5 164.9-75.3l32.8-37.9c25.5 71.4 3.4 165.1-67.2 235.7C262.8 478.2 132 488.1 61.9 418c-11.9-11.9-21.5-25.5-28.8-40.4zm-6.9-16.4C.8 289.8 22.9 196.1 93.5 125.5 185.2 33.7 316 23.9 386 94c11.9 11.8 21.5 25.5 28.8 40.4l-38 43.8C338.4 222.5 282.6 248 224 248c-63.3 0-123.5 27.5-164.9 75.3zm55.9-247C-13.6 209.9-27.7 351 50.6 429.4s219.5 64.2 315.2-31.6S475.7 161 397.4 82.6 177.9 18.4 82.2 114.2"})
  );
}

export default LanCoffeeBeanThin;
