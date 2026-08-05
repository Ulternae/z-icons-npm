import React from 'react';

export function LanArrowDownWideShortRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M249 369 145 473c-9.4 9.4-24.6 9.4-33.9 0L7 369c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l63 63V56c0-13.3 10.7-24 24-24s24 10.7 24 24v342.1l63-63c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zm63 111c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24s-10.7 24-24 24zm0-128c-13.3 0-24-10.7-24-24s10.7-24 24-24h112c13.3 0 24 10.7 24 24s-10.7 24-24 24zm0-128c-13.3 0-24-10.7-24-24s10.7-24 24-24h176c13.3 0 24 10.7 24 24s-10.7 24-24 24zm0-128c-13.3 0-24-10.7-24-24s10.7-24 24-24h240c13.3 0 24 10.7 24 24s-10.7 24-24 24z"})
  );
}

export default LanArrowDownWideShortRegular;
