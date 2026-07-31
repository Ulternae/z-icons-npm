import React from 'react';

export function CoreTagSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 518 517.45',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M454 0H230L19.2 210.7c-25 25-25 65.5 0 90.5l197.5 197.5c25 25 65.5 25 90.5 0L518 288V64c0-35.3-28.7-64-64-64m-85.5 104a40 40 0 1 1 0 80 40 40 0 1 1 0-80"})
  );
}

export default CoreTagSolid;
