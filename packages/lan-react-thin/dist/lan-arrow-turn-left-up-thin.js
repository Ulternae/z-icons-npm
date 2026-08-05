import React from 'react';

export function LanArrowTurnLeftUpThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M376 496c4.4 0 8 3.6 8 8s-3.6 8-8 8h-96c-53 0-96-43-96-96V27.3L45.7 165.7c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l152-152c3.1-3.1 8.2-3.1 11.3 0l152 152c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0L200 27.3V416c0 44.2 35.8 80 80 80z"})
  );
}

export default LanArrowTurnLeftUpThin;
