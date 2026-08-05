import React from 'react';

export function NeoAngleUpSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 560 560',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M560 359c0-12.5-4.5-24.8-13.1-34.4-13.6-15.2-48.3-53.1-92-93.9-43.3-40.4-97.1-85-148.7-112.3-8.4-4.4-17.5-6.4-26.3-6.4s-17.9 2-26.3 6.4c-51.5 27.3-105.2 71.9-148.6 112.3-43.7 40.7-78.4 78.7-91.9 93.9C4.5 334.2 0 346.5 0 359c0 35.4 33.7 59.6 66.4 51.7C108 400.7 187.9 385 280 385s172 15.7 213.6 25.7c32.6 7.9 66.4-16.3 66.4-51.7"})
  );
}

export default NeoAngleUpSolid;
