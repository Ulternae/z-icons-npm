import React from 'react';

export function LanSwapArrows({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M5.2 139.3c-6.2-6.2-6.2-16.4 0-22.6l80-80c3-3 7.1-4.7 11.3-4.7s8.3 1.7 11.3 4.7l80 80c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0l-52.7-52.7V368c0 44.2 35.8 80 80 80s80-35.8 80-80V144c0-61.9 50.1-112 112-112s112 50.1 112 112v281.4l52.7-52.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6l-80 80c-6.2 6.2-16.4 6.2-22.6 0l-80-80c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l52.7 52.7V144c0-44.2-35.8-80-80-80s-80 35.8-80 80v224c0 61.9-50.1 112-112 112s-112-50.1-112-112V86.6l-52.7 52.7c-6.2 6.2-16.4 6.2-22.6 0"})
  );
}

export default LanSwapArrows;
