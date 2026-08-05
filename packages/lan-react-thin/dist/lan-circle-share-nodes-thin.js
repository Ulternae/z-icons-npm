import React from 'react';

export function LanCircleShareNodesThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480m0 496a256 256 0 1 0 0-512 256 256 0 1 0 0 512m64-394a42 42 0 1 1 0 84 42 42 0 1 1 0-84m0 98c30.9 0 56-25.1 56-56s-25.1-56-56-56-56 25.1-56 56c0 7.7 1.5 15 4.3 21.7l-64.9 39c-10.3-12.6-25.9-20.6-43.4-20.6-30.9 0-56 25.1-56 56s25.1 56 56 56c17.5 0 33.1-8 43.4-20.6l64.9 39c-2.8 6.7-4.3 14-4.3 21.7 0 30.9 25.1 56 56 56s56-25.1 56-56-25.1-56-56-56c-17.5 0-33.1 8-43.4 20.6l-64.9-39c2.8-6.7 4.3-14 4.3-21.7s-1.5-15-4.3-21.7l64.9-39C286.9 208 302.5 216 320 216m0 94a42 42 0 1 1 0 84 42 42 0 1 1 0-84m-202-54a42 42 0 1 1 84 0 42 42 0 1 1-84 0"})
  );
}

export default LanCircleShareNodesThin;
