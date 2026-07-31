import React from 'react';

export function CoreItalic({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M321 32h127v64H339.8l-160 320H288v64H0v-64h108.2l160-320H160V32z"})
  );
}

export default CoreItalic;
