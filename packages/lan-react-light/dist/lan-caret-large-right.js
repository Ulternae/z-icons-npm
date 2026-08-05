import React from 'react';

export function LanCaretLargeRight({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 256 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M247.1 233.4c12.5 12.5 12.5 32.8 0 45.2l-160 160c-9.2 9.2-22.9 11.9-34.9 6.9-10.5-4.3-17.8-13.8-19.4-24.8l-.3-4.8v-320c0-12.9 7.8-24.6 19.8-29.6s25.7-2.1 34.8 7.1zM64.5 96v320l160-160z"})
  );
}

export default LanCaretLargeRight;
