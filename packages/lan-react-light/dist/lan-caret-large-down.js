import React from 'react';

export function LanCaretLargeDown({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M214.6 374.6c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-9.2-9.2-11.9-22.9-6.9-34.9l2.2-4.3c4.9-8.1 13.2-13.7 22.6-15.1l4.8-.3h320l4.8.3c9.4 1.4 17.7 7 22.6 15.1l2.2 4.3c4.3 10.5 2.8 22.3-3.8 31.2l-3.1 3.6-160 160zM352 192H32l160 160z"})
  );
}

export default LanCaretLargeDown;
