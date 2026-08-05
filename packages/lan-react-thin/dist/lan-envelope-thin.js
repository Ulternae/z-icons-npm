import React from 'react';

export function LanEnvelopeThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M55.9 64C25 64 0 89 0 119.9V384c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V119.9C512 89 487 64 456.1 64zM496 159v225c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48V159q3 3.15 6.6 5.7l190.5 141.4c25.5 18.9 60.3 18.9 85.8 0l190.5-141.3q3.6-2.7 6.6-5.7zM16 119.9C16 97.9 33.9 80 55.9 80h400.2c22 0 39.9 17.9 39.9 39.9 0 12.6-6 24.5-16.1 32L289.4 293.3c-19.8 14.7-46.9 14.7-66.7 0L32.1 151.9C22 144.4 16 132.5 16 119.9"})
  );
}

export default LanEnvelopeThin;
