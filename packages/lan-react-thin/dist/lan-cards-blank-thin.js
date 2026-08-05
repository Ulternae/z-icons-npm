import React from 'react';

export function LanCardsBlankThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '-6.005 -19.426 518.205 531.426',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M454.7 64.3c32.3 3.3 57.5 30.5 57.5 63.7v320l-.3 6.5c-3.1 30.1-27 54.1-57.1 57.1l-6.5.3h-192l-6.5-.3c-12.1-1.2-23.1-5.9-32.2-12.8l22-5.9c5.2 1.9 10.8 3.1 16.7 3.1h192c26.5 0 48-21.5 48-48V128c0-26.5-21.5-48-48-48h-79.2l-4.3-16h83.5l6.5.3zM233.3-18.6c32-5.2 63.4 14.6 72 46.6l82.8 309.1 1.3 6.4c4.8 29.9-12.1 59.2-40.4 69.9l-6.2 2-185.4 49.7-6.4 1.4c-29.9 4.8-59.2-12.1-70-40.4l-2-6.1-82.8-309.1c-8.6-32 8.7-64.8 39-76.3l6.2-2 185.5-49.7 6.4-1.4zm56.5 50.8c-6.8-25.6-33.1-40.8-58.7-34L45.6 47.9C20 54.8 4.8 81.1 11.7 106.7l82.8 309.1c6.9 25.6 33.2 40.8 58.8 33.9L338.8 400c25.6-6.9 40.8-33.2 33.9-58.8l-82.8-309z"})
  );
}

export default LanCardsBlankThin;
