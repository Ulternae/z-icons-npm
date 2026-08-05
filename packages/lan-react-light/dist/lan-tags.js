import React from 'react';

export function LanTags({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64.3 96c0-17.7 14.3-32 32-32h136.8c6.4 0 12.5 2.5 17 7l154.4 154.4c12.5 12.5 12.5 32.8 0 45.3L271 404.1c-12.5 12.5-32.8 12.5-45.3 0L71.4 249.8c-4.5-4.5-7-10.6-7-17zm-32 0v136.8c0 14.9 5.9 29.1 16.4 39.6l154.4 154.3c25 25 65.5 25 90.5 0l133.5-133.4c25-25 25-65.5 0-90.5L272.7 48.4A55.92 55.92 0 0 0 233.1 32H96.3c-35.3 0-64 28.7-64 64m348.8-43.4c-6.3 6.2-6.4 16.3-.2 22.6l153.9 155.9c9.2 9.4 9.2 24.4 0 33.7l-162 163.9c-6.2 6.3-6.2 16.4.1 22.6s16.4 6.2 22.6-.1l162-163.9c21.5-21.8 21.6-56.9 0-78.7L403.7 52.8c-6.2-6.3-16.3-6.4-22.6-.2M144.3 168a24 24 0 1 0 0-48 24 24 0 1 0 0 48"})
  );
}

export default LanTags;
