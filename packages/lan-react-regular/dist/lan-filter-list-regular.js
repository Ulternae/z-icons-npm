import React from 'react';

export function LanFilterListRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M24 64c-9.7 0-18.5 5.8-22.2 14.8S.2 98.1 7 105l121 121v118.1c0 6.4 2.5 12.5 7 17l80 80c6.9 6.9 17.2 8.9 26.2 5.2S256 433.7 256 424V225.9l121-121c6.9-6.9 8.9-17.2 5.2-26.2S369.7 64 360 64zm145 135-87-87h220.1l-87 87c-4.5 4.5-7 10.6-7 17v150.1l-32-32V216c0-6.4-2.5-12.5-7-17zM472 64c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24zM344 232c-13.3 0-24 10.7-24 24s10.7 24 24 24h176c13.3 0 24-10.7 24-24s-10.7-24-24-24zm0 168c-13.3 0-24 10.7-24 24s10.7 24 24 24h176c13.3 0 24-10.7 24-24s-10.7-24-24-24z"})
  );
}

export default LanFilterListRegular;
