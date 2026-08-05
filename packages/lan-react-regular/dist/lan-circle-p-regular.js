import React from 'react';

export function LanCirclePRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416m0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-56-368c-13.3 0-24 10.7-24 24v176c0 13.3 10.7 24 24 24s24-10.7 24-24v-32h44c46.4 0 84-37.6 84-84s-37.6-84-84-84zm68 120h-44v-72h44c19.9 0 36 16.1 36 36s-16.1 36-36 36"})
  );
}

export default LanCirclePRegular;
