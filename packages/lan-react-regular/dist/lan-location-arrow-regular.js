import React from 'react';

export function LanLocationArrowRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M213.9 267.8 79.4 222.9l340.7-131-131 340.7-44.9-134.5c-4.8-14.3-16-25.6-30.4-30.4zm104 223.7 160-416c4.5-11.8 1.7-25.2-7.2-34.1s-22.3-11.8-34.1-7.2l-416 160C7.9 199-.3 211.2 0 224.7s9.1 25.4 21.9 29.6l176.8 58.9L257.6 490c4.3 12.8 16.1 21.6 29.6 21.9s25.7-7.9 30.6-20.5z"})
  );
}

export default LanLocationArrowRegular;
