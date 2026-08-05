import React from 'react';

export function LanTShirtRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 640 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M189.4 56.6c7.1-5.6 15.8-8.6 24.8-8.6h4.6c10.8 45.9 52 80 101.2 80s90.4-34.1 101.2-80h4.6c9 0 17.7 3 24.8 8.6L568 149.3l-48 74.8-52.3-29.1c-7.4-4.1-16.5-4-23.8.3S432 207.5 432 216v240c0 4.4-3.6 8-8 8H216c-4.4 0-8-3.6-8-8V216c0-8.5-4.5-16.4-11.8-20.7s-16.4-4.4-23.8-.3L120 224.1l-48-74.8zM214.2 0c-19.8 0-39 6.7-54.5 18.9L25.1 125.2c-9.7 7.7-12 21.4-5.3 31.8l72 112c6.8 10.6 20.8 14.1 31.8 8l36.4-20.2V456c0 30.9 25.1 56 56 56h208c30.9 0 56-25.1 56-56V256.8l36.3 20.2c11.1 6.1 25 2.6 31.8-8l72-112c6.7-10.4 4.4-24.2-5.3-31.8L480.3 18.9C464.8 6.7 445.6 0 425.8 0zm55.2 48h101.2c-9 18.9-28.3 32-50.6 32s-41.6-13.1-50.6-32"})
  );
}

export default LanTShirtRegular;
