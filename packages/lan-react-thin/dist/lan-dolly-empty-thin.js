import React from 'react';

export function LanDollyEmptyThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M24 32c0-4.4 3.6-8 8-8h72.9c17.2 0 32.5 11 37.9 27.4l105.8 317.2c18.1 2.4 33.9 12.5 43.9 26.8l249-83c4.2-1.4 8.7.9 10.1 5.1s-.9 8.7-5.1 10.1L300 409.8c2.6 6.9 4 14.4 4 22.2 0 35.3-28.7 64-64 64s-64-28.7-64-64c0-32.5 24.3-59.4 55.7-63.5l-104-312.1c-3.3-9.8-12.4-16.4-22.8-16.4H32c-4.4 0-8-3.6-8-8m216 448a48 48 0 1 0 0-96 48 48 0 1 0 0 96"})
  );
}

export default LanDollyEmptyThin;
