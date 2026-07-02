import React from 'react';

export function CoreCommentSlashSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -45.2 640 602.5',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement('path', {"fill":"currentColor","d":"m621.5 512-45.2 45.3L19 0l45.3-45.2zm-223.6-42.6c-24.5 6.8-50.6 10.6-77.7 10.6-22.8 0-44.9-2.7-65.9-7.6L96.3 512l14.1-127.7C81.3 348 64.2 303.7 64.2 256c0-34.3 8.8-66.7 24.5-95.8zM320.3 32c141.4 0 256 100.3 256 224 0 34.3-8.8 66.7-24.5 95.7L242.5 42.5C267 35.7 293.2 32 320.3 32"})
  );
}

export default CoreCommentSlashSolid;
