import React from 'react';

export function LanArrowRightFromDottedLineThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M509.7 250.3c3.1 3.1 3.1 8.2 0 11.3l-152 152c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3L484.7 264H136c-4.4 0-8-3.6-8-8s3.6-8 8-8h348.7L346.4 109.7c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0l152 152zM0 432a16 16 0 1 1 32 0 16 16 0 1 1-32 0m16-104a16 16 0 1 1 0 32 16 16 0 1 1 0-32M0 256a16 16 0 1 1 32 0 16 16 0 1 1-32 0m16-104a16 16 0 1 1 0 32 16 16 0 1 1 0-32M0 80a16 16 0 1 1 32 0 16 16 0 1 1-32 0"})
  );
}

export default LanArrowRightFromDottedLineThin;
