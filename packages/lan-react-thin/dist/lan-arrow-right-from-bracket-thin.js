import React from 'react';

export function LanArrowRightFromBracketThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M184 48c4.4 0 8-3.6 8-8s-3.6-8-8-8H96C43 32 0 75 0 128v256c0 53 43 96 96 96h88c4.4 0 8-3.6 8-8s-3.6-8-8-8H96c-44.2 0-80-35.8-80-80V128c0-44.2 35.8-80 80-80zm325.7 213.7c3.1-3.1 3.1-8.2 0-11.3l-152-152c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3L484.7 248H168c-4.4 0-8 3.6-8 8s3.6 8 8 8h316.7L346.4 402.3c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0l152-152z"})
  );
}

export default LanArrowRightFromBracketThin;
