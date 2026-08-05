import React from 'react';

export function LanPersonArmsRaisedRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -32 384 576',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M55.5-12.7c-2.6-13-15.2-21.4-28.2-18.8S5.9-16.3 8.5-3.3l6.9 34.5C26.6 87.4 63.3 133.1 112 157.3V520c0 13.3 10.7 24 24 24s24-10.7 24-24V368h64v152c0 13.3 10.7 24 24 24s24-10.7 24-24V157.3c48.7-24.2 85.4-69.9 96.6-126.1l6.9-34.5c2.6-13-5.8-25.6-18.8-28.2s-25.6 5.8-28.2 18.8l-6.9 34.5C309.2 83.5 255 128 192 128S74.8 83.5 62.4 21.8zM224 320h-64V173.2c10.4 1.9 21.1 2.8 32 2.8s21.6-1 32-2.8zM192 80a56 56 0 1 0 0-112 56 56 0 1 0 0 112"})
  );
}

export default LanPersonArmsRaisedRegular;
