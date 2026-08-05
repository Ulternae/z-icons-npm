import React from 'react';

export function LanCardsBlankRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '-6.005 -19.426 518.205 531.426',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M454.7 64.4c32.3 3.3 57.5 30.5 57.5 63.7v320l-.3 6.5c-3.1 30.1-27 54.1-57.1 57.1l-6.5.3h-192l-6.5-.3c-12.1-1.2-23.1-5.9-32.2-12.8l130-34.8h100.8c8.8 0 16-7.2 16-16v-320c0-8.8-7.2-16-16-16h-70.7l-12.8-48h83.5l6.5.3zm-221.4-83c32-5.2 63.4 14.6 72 46.6l82.8 309.1 1.4 6.4c4.8 29.9-12.1 59.2-40.4 70l-6.2 2-185.5 49.7-6.4 1.3c-29.9 4.8-59.2-12.1-70-40.4l-2-6.2-82.8-309.1c-8.6-32 8.7-64.8 39-76.3l6.2-2 185.5-49.7zm6 47.8L53.9 78.9C45.4 81.2 40.3 90 42.6 98.5l82.8 309.1c2.3 8.5 11.1 13.6 19.6 11.3l185.4-49.7c8.5-2.3 13.6-11.1 11.3-19.6L258.9 40.5c-2.3-8.5-11.1-13.6-19.6-11.3"})
  );
}

export default LanCardsBlankRegular;
