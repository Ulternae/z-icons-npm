import React from 'react';

export function LanTagsRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M367.2 38.9c-9.4 9.3-9.5 24.5-.2 33.9l148.3 150.3c9.2 9.4 9.2 24.4 0 33.7L358.8 415.1c-9.3 9.4-9.2 24.6.2 33.9s24.6 9.2 33.9-.2l156.5-158.2c27.7-28 27.7-73.1 0-101.2L401.2 39.1c-9.3-9.4-24.5-9.5-33.9-.2zM80.1 96c0-8.8 7.2-16 16-16h133.5c4.2 0 8.3 1.7 11.3 4.7l144 144c6.2 6.2 6.2 16.4 0 22.6L251.4 384.8c-6.2 6.2-16.4 6.2-22.6 0l-144-144c-3-3-4.7-7.1-4.7-11.3zm-48 0v133.5c0 17 6.7 33.3 18.7 45.3l144 144c25 25 65.5 25 90.5 0l133.5-133.5c25-25 25-65.5 0-90.5l-144-144c-12-12-28.3-18.7-45.3-18.7L96.1 32c-35.3 0-64 28.7-64 64m112 80a32 32 0 1 0 0-64 32 32 0 1 0 0 64"})
  );
}

export default LanTagsRegular;
