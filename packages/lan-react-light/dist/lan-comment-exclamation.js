import React from 'react';

export function LanCommentExclamation({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 0c141.4 0 256 107.5 256 240S397.4 480 256 480c-36.5 0-71.2-7.1-102.6-20L37 509.8c-3.7 1.6-7.5 2.2-11.5 2.2C11.4 512 0 500.6 0 486.5c0-4.3 1.1-8.5 3.1-12.2l48.7-89.4C19.3 344.6 0 294.4 0 240 0 107.5 114.6 0 256 0m0 32C130.3 32 32 127 32 240c0 46.7 16.5 89.8 44.8 124.7 8.1 10.1 9.4 24.1 3.2 35.4l-40.2 73.7 101-43.3c7.9-3.4 16.8-3.4 24.8-.2 27.6 11.3 58.1 17.7 90.4 17.7 125.7 0 224-95 224-208S381.7 32 256 32m0 336a24 24 0 1 1 0-48 24 24 0 1 1 0 48m0-256c13.5 0 24.3 11.4 23.5 24.9l-7.6 136c-.5 8.5-7.5 15.1-16 15.1s-15.5-6.6-16-15.1l-7.6-136c-.8-13.5 10-24.9 23.5-24.9z"})
  );
}

export default LanCommentExclamation;
