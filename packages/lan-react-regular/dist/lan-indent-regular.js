import React from 'react';

export function LanIndentRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M0 64c0 13.3 10.7 24 24 24h400c13.3 0 24-10.7 24-24s-10.7-24-24-24H24C10.7 40 0 50.7 0 64m192 128c0 13.3 10.7 24 24 24h208c13.3 0 24-10.7 24-24s-10.7-24-24-24H216c-13.3 0-24 10.7-24 24m24 104c-13.3 0-24 10.7-24 24s10.7 24 24 24h208c13.3 0 24-10.7 24-24s-10.7-24-24-24zM0 448c0 13.3 10.7 24 24 24h400c13.3 0 24-10.7 24-24s-10.7-24-24-24H24c-13.3 0-24 10.7-24 24m121-179.6c7.8-6.4 7.8-18.3 0-24.7l-94.8-78.1C15.7 157 0 164.4 0 177.9v156.2c0 13.5 15.7 20.9 26.2 12.4z"})
  );
}

export default LanIndentRegular;
