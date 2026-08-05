import React from 'react';

export function LanSubtitlesSlash({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -31.95 576 575.9',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M27.3-27.3c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l544 544c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L499.6 445c25.8-8.3 44.4-32.4 44.4-61V128c0-35.3-28.7-64-64-64H118.6zM150.6 96H480c17.7 0 32 14.3 32 32v256c0 17.7-14.3 32-32 32h-9.4l-48-48H448c8.8 0 16-7.2 16-16s-7.2-16-16-16h-57.4zM32 128v256c0 35.3 28.7 64 64 64h293.6l-32-32H96c-17.7 0-32-14.3-32-32V128c0-1.8.1-3.5.4-5.2L39.5 97.9c-4.8 9-7.5 19.2-7.5 30.1m96 128c-8.8 0-16 7.2-16 16s7.2 16 16 16h101.6l-32-32zm0 80c-8.8 0-16 7.2-16 16s7.2 16 16 16h181.6l-32-32zm320-80h-64c-8.8 0-16 7.2-16 16s7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16"})
  );
}

export default LanSubtitlesSlash;
