import React from 'react';

export function LanUserVneck({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M224 32a96 96 0 1 1 0 192 96 96 0 1 1 0-192M96 128a128 128 0 1 0 256 0 128 128 0 1 0-256 0m60.1 184.8c-3.8-4.4-9.6-6.4-15.3-5.2C60.5 323.9 0 394.9 0 480.1v16c0 8.8 7.2 16 16 16s16-7.2 16-16v-16c0-66.4 45-122.4 106.2-139l73.7 85.4c3 3.5 7.5 5.6 12.1 5.6s9.1-2 12.1-5.6l73.7-85.5C371 357.6 416 413.6 416 480v16c0 8.8 7.2 16 16 16s16-7.2 16-16v-16c0-85.2-60.5-156.2-140.8-172.5-5.7-1.2-11.5.9-15.3 5.2L224 391.4l-67.9-78.7z"})
  );
}

export default LanUserVneck;
