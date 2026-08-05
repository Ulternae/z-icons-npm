import React from 'react';

export function LanArrowTurnDownLeftThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M496 72c0-4.4 3.6-8 8-8s8 3.6 8 8v96c0 53-43 96-96 96H27.3l138.4 138.3c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0l-152-152c-3.1-3.1-3.1-8.2 0-11.3l152-152c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3L27.3 248H416c44.2 0 80-35.8 80-80z"})
  );
}

export default LanArrowTurnDownLeftThin;
