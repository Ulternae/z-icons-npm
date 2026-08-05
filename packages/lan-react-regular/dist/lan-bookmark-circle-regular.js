import React from 'react';

export function LanBookmarkCircleRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416m0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-96-336v192c0 6.2 3.5 11.8 9.1 14.4s12.1 1.9 16.9-1.9l70-56 70 56c4.8 3.8 11.4 4.6 16.9 1.9s9.1-8.3 9.1-14.4V176c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48"})
  );
}

export default LanBookmarkCircleRegular;
