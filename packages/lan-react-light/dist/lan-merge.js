import React from 'react';

export function LanMerge({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M0 80c0-8.8 7.2-16 16-16h103.3c30.7 0 59.6 14.7 77.6 39.5L277 213.6c12 16.6 31.3 26.4 51.8 26.4h128.6l-52.7-52.7c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l80 80c6.2 6.2 6.2 16.4 0 22.6l-80 80c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l52.7-52.7H328.8c-20.5 0-39.7 9.8-51.8 26.4l-80.1 110.1C178.8 433.3 150 448 119.3 448H16c-8.8 0-16-7.2-16-16s7.2-16 16-16h103.3c20.5 0 39.7-9.8 51.8-26.4l80.1-110.1c6.8-9.4 15.2-17.3 24.6-23.5-9.4-6.2-17.8-14.2-24.6-23.5L171 122.4C159 105.8 139.7 96 119.3 96H16C7.2 96 0 88.8 0 80"})
  );
}

export default LanMerge;
