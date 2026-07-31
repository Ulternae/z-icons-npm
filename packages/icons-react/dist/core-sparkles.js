import React from 'react';

export const CoreSparkles = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32 576 576',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M508 420h68v56h-68v68h-56v-68h-68v-56h68v-68h56zM316.6 49.7l54.5 108.9c3.1 6.2 8.1 11.2 14.3 14.3L551.6 256l-166.2 83.1c-6.2 3.1-11.2 8.1-14.3 14.3L288 519.6l-83.1-166.2c-3.1-6.2-8.1-11.2-14.3-14.3L24.4 256l166.2-83.1c6.2-3.1 11.2-8.1 14.3-14.3L288-7.6l28.6 57.2zm-54.4 137.5c-9.3 18.6-24.4 33.6-42.9 42.9l-51.7 25.8 51.7 25.8c18.6 9.3 33.6 24.4 42.9 42.9l25.8 51.7 25.8-51.7c9.3-18.6 24.4-33.6 42.9-42.9l51.7-25.8-51.7-25.8c-18.6-9.3-33.6-24.4-42.9-42.9L288 135.5zM124 36h68v56h-68v68H68V92H0V36h68v-68h56z"})
);

export default CoreSparkles;
