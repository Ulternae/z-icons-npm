import React from 'react';

export function CoreArrowPointerRegularDuo({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '-4 -4.3 516.3 516.4',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement('path', {"fill":"currentColor","d":"m100.7 100.3 108.4 308 49.3-131.5 5.1-13.6 13.6-5.1 131.5-49.3-308-108.4z","opacity":".4"}), React.createElement('path', {"fill":"currentColor","d":"m59 17.8 424.3 149.3c17.4 6.1 29 22.5 29 41 0 18.1-11.2 34.3-28.2 40.7l-171 64.1-64.1 171c-6.4 16.9-22.6 28.2-40.7 28.2-18.4 0-34.9-11.6-41-29L18.2 58.6-4-4.3zm150 390.5 49.3-131.5 5.1-13.6 13.6-5.1 131.5-49.3-308-108.4 108.4 308z"})
  );
}

export default CoreArrowPointerRegularDuo;
