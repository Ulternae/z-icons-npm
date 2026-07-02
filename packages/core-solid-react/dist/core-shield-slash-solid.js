import React from 'react';

export function CoreShieldSlashSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -45.2 640 602.5',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement('path', {"fill":"currentColor","d":"m621.5 512-45.2 45.3L19 0l45.3-45.2zM96.3 167.8 403 474.5l-82.7 41.3-100.2-50.1c-75.9-38-123.8-115.5-123.8-200.4v-97.6zM330.4 1.7l170.1 56.6c26.1 8.7 43.7 33.2 43.8 60.7v146.3c0 23.5-3.7 46.5-10.7 68.2L228.8 28.8l81.3-27.1 10.2-3.5z"})
  );
}

export default CoreShieldSlashSolid;
