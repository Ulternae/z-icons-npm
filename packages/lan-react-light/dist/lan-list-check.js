import React from 'react';

export function LanListCheck({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M141.3 56.9c4.9-7.4 2.9-17.3-4.4-22.2s-17.3-2.9-22.2 4.4l-53.2 79.8-34.2-34.2c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l48 48c3.4 3.4 8.1 5.1 12.9 4.6s9.1-3.1 11.7-7zM208 80c-8.8 0-16 7.2-16 16s7.2 16 16 16h288c8.8 0 16-7.2 16-16s-7.2-16-16-16zm0 160c-8.8 0-16 7.2-16 16s7.2 16 16 16h288c8.8 0 16-7.2 16-16s-7.2-16-16-16zm-32 160c-8.8 0-16 7.2-16 16s7.2 16 16 16h320c8.8 0 16-7.2 16-16s-7.2-16-16-16zm-120-8a24 24 0 1 0 0 48 24 24 0 1 0 0-48m80.9-197.3c-7.4-4.9-17.3-2.9-22.2 4.4l-53.2 79.8-34.2-34.2c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l48 48c3.4 3.4 8.1 5.1 12.9 4.6s9.1-3.1 11.7-7l64-96c4.9-7.4 2.9-17.3-4.4-22.2"})
  );
}

export default LanListCheck;
