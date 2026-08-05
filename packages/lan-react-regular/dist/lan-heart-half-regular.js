import React from 'react';

export function LanHeartHalfRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M133.1 80c-47 0-85.1 38.1-85.1 85.1 0 49.9 32 98.4 68.1 142.3 29 35.2 62.5 67.5 91.9 92.7V123.4l-5.9-8.1c-16-22.1-41.7-35.2-69-35.2zM0 165.1C0 91.6 59.6 32 133.1 32 175.8 32 216 52.5 241 87.1l10.4 14.4c3 4.1 4.6 9 4.6 14.1v334.2c0 8.6-4.6 16.5-12 20.8s-16.6 4.3-24 0c-2.5-1.4-4.9-3-7.1-4.8-36.5-27.9-89.7-74.4-133.8-127.9C42.9 294 0 233.7 0 165.1"})
  );
}

export default LanHeartHalfRegular;
