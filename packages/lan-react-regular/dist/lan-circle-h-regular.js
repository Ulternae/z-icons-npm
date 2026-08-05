import React from 'react';

export function LanCircleHRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416m0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512m96-344c0-13.3-10.7-24-24-24s-24 10.7-24 24v64h-96v-64c0-13.3-10.7-24-24-24s-24 10.7-24 24v176c0 13.3 10.7 24 24 24s24-10.7 24-24v-64h96v64c0 13.3 10.7 24 24 24s24-10.7 24-24z"})
  );
}

export default LanCircleHRegular;
