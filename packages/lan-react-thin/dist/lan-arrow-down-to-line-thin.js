import React from 'react';

export function LanArrowDownToLineThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M376 512c4.4 0 8-3.6 8-8s-3.6-8-8-8H8c-4.4 0-8 3.6-8 8s3.6 8 8 8zM186.4 381.7c3.1 3.1 8.2 3.1 11.3 0l152-152c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L200 356.7V8c0-4.4-3.6-8-8-8s-8 3.6-8 8v348.7L45.7 218.4c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3z"})
  );
}

export default LanArrowDownToLineThin;
