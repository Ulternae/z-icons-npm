import React from 'react';

export function CorePaintbrushRegularDuo({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement('path', {"fill":"currentColor","d":"M281.2 244c20.9 12.4 38.4 29.8 50.8 50.7l169.5-169.5 2.4-2.6c5.2-6.4 8.1-14.4 8.1-22.8 0-19.8-16.1-35.9-35.9-35.9-9.5 0-18.6 3.8-25.4 10.5z","opacity":".4"}), React.createElement('path', {"fill":"currentColor","d":"M476.1 0C531.3 0 576 44.7 576 99.9c0 24.8-9.3 48.7-25.8 67l-3.4 3.6L352 365.3c0 .9.1 1.8.1 2.7 0 79.5-64.5 144-144 144H.1v-64h64v-80c0-79.5 64.5-144 144-144 .9 0 1.8 0 2.7.1L405.6 29.3l3.6-3.4C427.4 9.2 451.3 0 476.1 0M208 288c-44.2 0-80 35.8-80 80v80h80c44.2 0 80-35.8 80-80s-35.8-80-80-80M476.1 64c-9.5 0-18.6 3.8-25.4 10.5L281.2 244c20.9 12.4 38.4 29.8 50.8 50.7l169.5-169.5 2.4-2.6c5.2-6.4 8.1-14.4 8.1-22.8 0-19.8-16.1-35.9-35.9-35.9z"})
  );
}

export default CorePaintbrushRegularDuo;
