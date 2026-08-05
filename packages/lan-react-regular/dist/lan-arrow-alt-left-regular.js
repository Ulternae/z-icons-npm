import React from 'react';

export function LanArrowAltLeftRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M54.6 256 176 377.4V312c0-13.3 10.7-24 24-24h200v-64H200c-13.3 0-24-10.7-24-24v-65.4zM9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l160-160c9.2-9.2 22.9-11.9 34.9-6.9S224.1 83 224.1 96v80h176c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48h-176v80c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-160-160z"})
  );
}

export default LanArrowAltLeftRegular;
