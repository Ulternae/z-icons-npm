import React from 'react';

export function LanArrowUTurnDownLeftThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '-0.025 0 512.025 527.925',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"m138.3 525.7-136-136c-3.1-3.1-3.1-8.2 0-11.3l136-136c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3L27.3 376H332c90.6 0 164-73.4 164-164S422.6 48 332 48H72c-4.3-.4-8-3.3-8-8s3.7-7.6 8-8h260c99.4 0 180 80.6 180 180s-80.6 180-180 180H27.3l122.4 122.3c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0z"})
  );
}

export default LanArrowUTurnDownLeftThin;
