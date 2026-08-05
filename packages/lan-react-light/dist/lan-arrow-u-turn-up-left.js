import React from 'react';

export function LanArrowUTurnUpLeft({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -15.95 512 527.95',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M0 128c0-4.2 1.7-8.3 4.7-11.3l128-128c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6L54.6 112H328c101.6 0 184 82.4 184 184s-82.4 184-184 184H80l-3.2-.3c-7.3-1.5-12.8-8-12.8-15.7s5.5-14.2 12.8-15.7l3.2-.3h248c83.9 0 152-68.1 152-152s-68-152-152-152H54.6l100.7 100.7 2.1 2.5c4.1 6.2 3.4 14.7-2.1 20.1s-13.9 6.2-20.1 2.1l-2.5-2.1-128-128c-3-3-4.7-7.1-4.7-11.3"})
  );
}

export default LanArrowUTurnUpLeft;
