import React from 'react';

export function LanStarSharp({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"m256 43.6-48.8 153.3c-2.1 6.6-8.2 11.1-15.2 11.1H43.3l126 91c5.5 4 7.9 11.1 5.9 17.6l-43.8 143.9 114.7-89.2c5.8-4.5 13.9-4.5 19.6 0l114.7 89.2-43.8-143.9c-2-6.5.4-13.6 5.9-17.6l126-91H319.8c-7 0-13.1-4.5-15.2-11.1zm-25.7-24.8C233.9 7.6 244.3 0 256 0s22.1 7.6 25.7 18.8l50 157.2h153.7c14.7 0 26.6 11.9 26.6 26.6 0 8.5-4.1 16.6-11 21.6l-130.3 94.1 50.8 167c4.1 13.3-5.9 26.8-19.8 26.8-4.6 0-9.1-1.5-12.7-4.4L256 404.3 123.1 507.6c-3.6 2.8-8.1 4.4-12.7 4.4-13.9 0-23.9-13.4-19.8-26.8l50.8-167-130.3-94.1c-6.9-5-11-13-11-21.6 0-14.7 11.9-26.6 26.6-26.6h153.7l50-157.2z"})
  );
}

export default LanStarSharp;
