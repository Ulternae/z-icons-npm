import React from 'react';

export function LanPinballRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M400 128a48 48 0 1 0-96 0 48 48 0 1 0 96 0m-48-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192M22.5 226.3c34.1-40.6 94.6-45.9 135.2-11.8l246 208.3L384 448l-.1.1h.1l28 15.4-1.4 2.4c-7.8 11.6-22.6 17.2-36.5 12.6L66.3 379.3c-9-2.9-17.4-7.1-24.8-12.3l-7.2-5.5c-40.6-34.1-46-94.7-11.9-135.3zM384 448l19.7-25.2c12.5 9.8 15.8 27.1 8.3 40.6zM122.9 248.3c-20.1-13.7-47.7-10.2-63.7 8.9-17 20.3-14.4 50.6 5.9 67.7 4.5 3.8 9.9 6.9 16 8.8L311.9 408 126.8 251.2zM96 264a24 24 0 1 1 0 48 24 24 0 1 1 0-48"})
  );
}

export default LanPinballRegular;
