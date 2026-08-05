import React from 'react';

export function LanTickRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 192 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M96 80c-13.3 0-24 10.7-24 24 0 2.9.1 4.7.4 6.1L96 252l23.6-141.9c.2-1.4.4-3.2.4-6.1 0-13.3-10.7-24-24-24m-72 24c0-39.8 32.2-72 72-72s72 32.2 72 72c0 3.9-.1 8.8-1 14l-24.4 146.5C138.8 287.3 119.1 304 96 304s-42.8-16.7-46.6-39.5L25 118c-.9-5.3-1-10.2-1-14"})
  );
}

export default LanTickRegular;
