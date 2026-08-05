import React from 'react';

export function LanArrowsUpDown({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -31.9 256 575.85',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"m4.7 427.3 112 112c6.2 6.2 16.4 6.2 22.6 0l112-112c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L144 489.4V22.7l84.7 84.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-112-112c-3-3-7.1-4.7-11.3-4.7s-8.3 1.7-11.3 4.7L4.7 84.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L112 22.6v466.7l-84.7-84.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6z"})
  );
}

export default LanArrowsUpDown;
