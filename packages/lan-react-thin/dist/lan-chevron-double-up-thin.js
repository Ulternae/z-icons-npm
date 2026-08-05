import React from 'react';

export function LanChevronDoubleUpThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M229.7 34.3c-3.1-3.1-8.2-3.1-11.3 0l-216 216c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0L224 51.3l210.3 210.4c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3l-216-216zm216 408-216-216c-3.1-3.1-8.2-3.1-11.3 0l-216 216c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0L224 243.3l210.3 210.4c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3z"})
  );
}

export default LanChevronDoubleUpThin;
