import React from 'react';

export function LanSingleQuoteRightRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 192 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M56 416c-13.3 0-24-10.7-24-24s10.7-24 24-24h16c39.8 0 72-32.2 72-72v-10.1c-3.1.8-6.2 1.4-9.5 1.7l-6.5.3H64l-6.5-.3C25.2 284.4 0 257.1 0 224v-64l.3-6.5c3.1-30.1 27-54.1 57.1-57.1l6.5-.3h64l6.5.3c30.1 3.1 54.1 27 57.1 57.1l.3 6.5v136c0 66.3-53.7 120-120 120h-16zm72-176c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16z"})
  );
}

export default LanSingleQuoteRightRegular;
