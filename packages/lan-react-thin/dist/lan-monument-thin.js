import React from 'react';

export function LanMonumentThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -32.025 320 544.025',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M154.3-29.7c3.1-3.1 8.2-3.1 11.3 0l80 80c1.3 1.3 2.1 3.1 2.3 4.9L287.3 496H312c4.4 0 8 3.6 8 8s-3.6 8-8 8H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h24.7L72 55.3c.2-1.9 1-3.6 2.3-4.9l80-80zm77.9 89.3-72.3-72.3-72.3 72.3-39 436.4h222.5l-39-436.4zM104 304h112c4.4 0 8 3.6 8 8s-3.6 8-8 8H104c-4.4 0-8-3.6-8-8s3.6-8 8-8"})
  );
}

export default LanMonumentThin;
