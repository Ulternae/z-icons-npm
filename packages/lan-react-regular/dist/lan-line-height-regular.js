import React from 'react';

export function LanLineHeightRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M113 39c-9.4-9.4-24.6-9.4-33.9 0L7 111c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l31-31V398l-31-31c-9.4-9.4-24.6-9.4-33.9 0s-9.3 24.6 0 34l72 72c9.4 9.4 24.6 9.4 33.9 0l72-72c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-31 31V114l31 31c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9zm167 25c-13.3 0-24 10.7-24 24s10.7 24 24 24h208c13.3 0 24-10.7 24-24s-10.7-24-24-24zm0 168c-13.3 0-24 10.7-24 24s10.7 24 24 24h208c13.3 0 24-10.7 24-24s-10.7-24-24-24zm0 168c-13.3 0-24 10.7-24 24s10.7 24 24 24h208c13.3 0 24-10.7 24-24s-10.7-24-24-24z"})
  );
}

export default LanLineHeightRegular;
