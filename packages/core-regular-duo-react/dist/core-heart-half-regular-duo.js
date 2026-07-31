import React from 'react';

export function CoreHeartHalfRegularDuo({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 521.8',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M111.1 123.1c-36.1 36.1-36.1 94.6 0 130.8 59.1 59.1 118.3 118.2 177.4 177.4V169.8l-46.6-46.6c-12.1-12.1-26.8-20.2-42.4-24.2-.3-.1-.6-.2-.9-.2h-.1c-1.4-.4-2.9-.7-4.3-.9-2.9-.6-5.8-1-8.8-1.3-26.5-2.5-53.9 6.3-74.2 26.6z","opacity":".4"}), React.createElement("path", {"fill":"currentColor","d":"M65.8 77.8c61.1-61.1 160.2-61.1 221.2 0l1.4 1.4v90.5l-46.6-46.6C205.7 87 147.1 87 111 123.1s-36.1 94.6 0 130.8l177.4 177.4v90.5L65.8 299.2C4.7 238 4.7 138.9 65.8 77.8"})
  );
}

export default CoreHeartHalfRegularDuo;
