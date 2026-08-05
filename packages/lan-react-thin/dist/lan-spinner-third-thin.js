import React from 'react';

export function LanSpinnerThirdThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M470.8 380c3.8 2.2 8.7.9 10.8-3C501 341 512 299.7 512 256 512 117.3 401.7 4.4 264 .1c-4.4-.1-8 3.5-8 7.9s3.6 8 8 8.1c128.8 4.2 232 110 232 239.9 0 40.9-10.2 79.3-28.2 113-2.1 3.9-.8 8.8 3 11"})
  );
}

export default LanSpinnerThirdThin;
