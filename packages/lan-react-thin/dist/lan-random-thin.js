import React from 'react';

export function LanRandomThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M410.3 466.3c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0l88-88c3.1-3.1 3.1-8.2 0-11.3l-88-88c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l74.4 74.4H364c-25.2 0-48.9-11.9-64-32L160.8 158.4C142.7 134.2 114.2 120 84 120H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h76c25.2 0 48.9 11.9 64 32l139.2 185.6c18.1 24.2 46.6 38.4 76.8 38.4h120.7l-74.3 74.3zM160.8 353.6l33.2-44.3-10-13.3-36 48c-15.1 20.1-38.8 32-64 32H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h76c30.2 0 58.7-14.2 76.8-38.4M254 202.7l10 13.3 36-48c15.1-20.1 38.8-32 64-32h120.7l-74.3 74.3c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0l88-88c3.1-3.1 3.1-8.2 0-11.3l-88-88c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l74.3 74.4H364c-30.2 0-58.7 14.2-76.8 38.4z"})
  );
}

export default LanRandomThin;
