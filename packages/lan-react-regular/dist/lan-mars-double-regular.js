import React from 'react';

export function LanMarsDoubleRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 640 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M288 40c0-13.3 10.7-24 24-24h128c13.3 0 24 10.7 24 24v128c0 13.3-10.7 24-24 24s-24-10.7-24-24V97.9l-99.7 99.7C338.7 227.1 352 264 352 303.9c0 97.2-78.8 176-176 176S0 401.2 0 304s78.8-176 176-176c39.9 0 76.8 13.3 106.3 35.7L382.1 64H312c-13.3 0-24-10.7-24-24M176 432a128 128 0 1 0 0-256 128 128 0 1 0 0 256m142.5 44.8c15.8-13 29.8-28.2 41.5-45.1 67-4.1 120-59.8 120-127.8 0-24.6-6.9-47.6-19-67.1 16-4.9 29.6-15.1 38.7-28.6 17.9 27.6 28.3 60.4 28.3 95.7 0 97.2-78.8 176-176 176-11.4 0-22.6-1.1-33.5-3.2zM512 110.1 558.1 64H512V40c0-8.4-1.4-16.5-4.1-24H616c13.3 0 24 10.7 24 24v128c0 13.3-10.7 24-24 24s-24-10.7-24-24V97.9l-80.8 80.8c.5-3.5.8-7.1.8-10.7z"})
  );
}

export default LanMarsDoubleRegular;
