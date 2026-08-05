import React from 'react';

export function LanDownFromBracketRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M207 505c9.4 9.4 24.6 9.4 33.9 0L385 361c6.9-6.9 8.9-17.2 5.2-26.2S377.7 320 368 320h-64V208c0-26.5-21.5-48-48-48h-64c-26.5 0-48 21.5-48 48v112H80c-9.7 0-18.5 5.8-22.2 14.8S56.2 354.1 63 361zm73-137h30.1L224 454.1 137.9 368H168c6.4 0 12.5-2.5 17-7s7-10.6 7-17V208h64v136c0 13.3 10.7 24 24 24m120-200c0 13.3 10.7 24 24 24s24-10.7 24-24V96c0-53-43-96-96-96H96C43 0 0 43 0 96v72c0 13.3 10.7 24 24 24s24-10.7 24-24V96c0-26.5 21.5-48 48-48h256c26.5 0 48 21.5 48 48z"})
  );
}

export default LanDownFromBracketRegular;
