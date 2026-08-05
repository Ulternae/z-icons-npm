import React from 'react';

export function LanTreeLargeThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256.5 0c2.2 0 4.4.9 5.9 2.6l176 192c2.1 2.3 2.7 5.7 1.4 8.6s-4.1 4.8-7.3 4.8H362l113.2 130.7c2 2.4 2.5 5.7 1.2 8.6s-4.2 4.7-7.3 4.7h-83.4l124.8 146.8c2 2.4 2.5 5.7 1.2 8.5s-4.1 4.7-7.3 4.7H8.4c-3.1 0-5.9-1.8-7.2-4.7s-.9-6.2 1.2-8.5L127.2 352H43.8c-3.1 0-6-1.8-7.3-4.7s-.8-6.2 1.2-8.6L151 208H80.5c-3.2 0-6-1.9-7.3-4.8s-.7-6.3 1.4-8.6l176-192 1.2-1.1c1.3-1 3-1.5 4.7-1.5M98.7 192h69.8c3.1 0 6 1.8 7.3 4.7s.8 6.2-1.2 8.6L61.3 336h83.2c3.1 0 5.9 1.8 7.2 4.7s.9 6.2-1.2 8.5L25.8 496h461.4L362.4 349.2c-2-2.4-2.5-5.7-1.2-8.5s4.1-4.7 7.3-4.7h83.2L338.4 205.2c-2-2.4-2.5-5.7-1.2-8.6s4.2-4.7 7.3-4.7l69.8.1L256.5 19.8z"})
  );
}

export default LanTreeLargeThin;
