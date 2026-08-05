import React from 'react';

export function LanCircleShareNodesRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416m0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512m120-352c0-30.9-25.1-56-56-56s-56 25.1-56 56c0 5.3.7 10.5 2.1 15.3l-69.8 38.1C186.5 205 173.8 200 160 200c-30.9 0-56 25.1-56 56s25.1 56 56 56c13.9 0 26.6-5 36.3-13.4l69.8 38.1q-2.1 7.35-2.1 15.3c0 30.9 25.1 56 56 56s56-25.1 56-56-25.1-56-56-56c-10.8 0-20.9 3.1-29.5 8.4l-75-40.9c.3-2.4.5-5 .5-7.5s-.2-5-.5-7.5l75-40.9c8.6 5.3 18.7 8.4 29.5 8.4 30.9 0 56-25.1 56-56"})
  );
}

export default LanCircleShareNodesRegular;
