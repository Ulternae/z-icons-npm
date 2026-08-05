import React from 'react';

export function LanPhoneCircleAltRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416m0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512m72-383.3c-9.8-2.7-20.1 2.4-24 11.8l-20.3 48.7c-3.4 8.3-1.1 17.8 5.9 23.5l13.6 11.1c-16.1 35-43.8 63.6-78.1 80.9l-12.3-15.1c-5.7-6.9-15.2-9.3-23.5-5.9L140.6 304c-9.4 3.9-14.4 14.2-11.8 24l.8 2.8c8.8 32.3 40.1 59.9 78.2 51.8 87.5-18.5 156.3-87.4 174.9-174.9 8.1-38.1-19.5-69.4-51.8-78.2l-2.8-.8z"})
  );
}

export default LanPhoneCircleAltRegular;
