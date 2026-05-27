import React from 'react';

export const CoreMagnifyingGlassMinusSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256.3 0c123.7 0 224 100.3 224 224 0 50.3-16.6 96.7-44.6 134.1L557.5 480l-45.2 45.3-121.9-121.9c-37.4 28-83.8 44.6-134.1 44.6-123.7 0-224-100.3-224-224S132.5 0 256.3 0m-96 200v48h192v-48z"})
);

export default CoreMagnifyingGlassMinusSolid;
