import React from 'react';

export function LanChevronDownThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M218.3 413.7c3.1 3.1 8.2 3.1 11.3 0l216-216c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L224 396.7 13.7 186.3c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l216 216z"})
  );
}

export default LanChevronDownThin;
