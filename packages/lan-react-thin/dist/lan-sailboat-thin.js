import React from 'react';

export function LanSailboatThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M248 320V28.2L446 315c1.5 2.1-.1 5-2.6 5zm0 16h195.4c15.5 0 24.6-17.4 15.8-30.1L251.1 4.5c-2-2.8-5.2-4.5-8.6-4.5-5.8 0-10.5 4.7-10.5 10.5v55.1c0 4.2-1.4 8.3-3.9 11.6l-172.8 228c-9.6 12.6-.6 30.8 15.3 30.8H232v48H16c-8.8 0-16 7.2-16 16 0 61.9 50.1 112 112 112h288c61.9 0 112-50.1 112-112 0-8.8-7.2-16-16-16H248zm-16 64h264c0 53-43 96-96 96H112c-53 0-96-43-96-96zm0-80H70.6c-2.6 0-4.1-3-2.6-5.1L232 98.5z"})
  );
}

export default LanSailboatThin;
