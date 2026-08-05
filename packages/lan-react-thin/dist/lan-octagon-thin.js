import React from 'react';

export function LanOctagonThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M182 16.1c-8.5 0-16.6 3.4-22.6 9.4L25.9 159c-6 6-9.4 14.1-9.4 22.6v148.8c0 8.5 3.4 16.6 9.4 22.6l133.5 133.6c6 6 14.1 9.4 22.6 9.4h148.8c8.5 0 16.6-3.4 22.6-9.4L487 353c6-6 9.4-14.1 9.4-22.6V181.6c0-8.5-3.4-16.6-9.4-22.6L353.5 25.4c-6-6-14.1-9.4-22.6-9.4zm-33.9-1.9c9-9 21.2-14.1 33.9-14.1h148.8c12.7 0 24.9 5.1 33.9 14.1l133.6 133.4c9 9 14.1 21.2 14.1 33.9v148.8c0 12.7-5.1 24.9-14.1 33.9L364.8 497.9c-9 9-21.2 14.1-33.9 14.1H182.1c-12.7 0-24.9-5.1-33.9-14.1L14.6 364.4c-9-9-14.1-21.2-14.1-33.9V181.7c0-12.7 5.1-24.9 14.1-33.9L148.1 14.1z"})
  );
}

export default LanOctagonThin;
