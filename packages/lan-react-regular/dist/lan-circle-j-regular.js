import React from 'react';

export function LanCircleJRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416m0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512m80-344c0-13.3-10.7-24-24-24s-24 10.7-24 24v112c0 22.1-17.9 40-40 40s-40-17.9-40-40c0-13.3-10.7-24-24-24s-24 10.7-24 24c0 48.6 39.4 88 88 88s88-39.4 88-88z"})
  );
}

export default LanCircleJRegular;
