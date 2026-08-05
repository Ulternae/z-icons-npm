import React from 'react';

export function LanAngleDoubleRightRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"m81.5 433 160-160c9.4-9.4 9.4-24.6 0-33.9L81.5 79c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l143 143-143 143c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0zm192 0 160-160c9.4-9.4 9.4-24.6 0-33.9L273.5 79c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l143 143-143 143c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0z"})
  );
}

export default LanAngleDoubleRightRegular;
