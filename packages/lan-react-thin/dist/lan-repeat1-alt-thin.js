import React from 'react';

export function LanRepeat1AltThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -15.925 512 543.85',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M477.7 90.3c3.1 3.1 3.1 8.2 0 11.3l-104 104c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l90.3-90.3H192c-97.2 0-176 78.8-176 176 0 4.4-3.6 8-8 8s-8-3.6-8-8C0 174 86 88 192 88h260.7L362.4-2.3c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0l104 104zM34.3 421.7c-3.1-3.1-3.1-8.2 0-11.3l104-104c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3L59.3 408H320c97.2 0 176-78.8 176-176 0-4.4 3.6-8 8-8s8 3.6 8 8c0 106-86 192-192 192H59.3l90.3 90.3c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0l-104-104zM280 200v112c0 4.4-3.6 8-8 8s-8-3.6-8-8v-97.9l-27.9 16.7c-3.8 2.3-8.7 1-11-2.7s-1-8.7 2.7-11l40-24c2.5-1.5 5.5-1.5 8.1-.1s4.1 4.1 4.1 7"})
  );
}

export default LanRepeat1AltThin;
