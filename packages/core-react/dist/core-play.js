import React from 'react';

export function CorePlay({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M0 32h54.3c12.6 0 25 3.7 35.5 10.7l280 186.7c8.9 5.9 14.2 15.9 14.2 26.6s-5.3 20.7-14.2 26.6l-280 186.7c-10.5 7-22.9 10.7-35.5 10.7H0zm64 70.5v307L294.3 256z"})
  );
}

export default CorePlay;
