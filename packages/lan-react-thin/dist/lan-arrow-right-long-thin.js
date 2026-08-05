import React from 'react';

export function LanArrowRightLongThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M573.7 261.7c3.1-3.1 3.1-8.2 0-11.3l-152-152c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3L548.7 248H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h540.7L410.4 402.3c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0l152-152z"})
  );
}

export default LanArrowRightLongThin;
