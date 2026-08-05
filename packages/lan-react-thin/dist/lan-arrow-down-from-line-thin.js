import React from 'react';

export function LanArrowDownFromLineThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M8 16c-4.4 0-8-3.6-8-8s3.6-8 8-8h368c4.4 0 8 3.6 8 8s-3.6 8-8 8zm341.7 341.7-152 152c-3.1 3.1-8.2 3.1-11.3 0l-152-152c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0L184 484.7V136c0-4.4 3.6-8 8-8s8 3.6 8 8v348.7l138.3-138.3c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3z"})
  );
}

export default LanArrowDownFromLineThin;
