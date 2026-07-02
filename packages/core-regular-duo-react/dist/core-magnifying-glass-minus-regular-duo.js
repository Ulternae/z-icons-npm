import React from 'react';

export function CoreMagnifyingGlassMinusRegularDuo({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 525.3',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement('path', {"fill":"currentColor","d":"M96.3 224a160 160 0 1 0 320 0 160 160 0 1 0-320 0m64-28h192v56h-192z","opacity":".4"}), React.createElement('path', {"fill":"currentColor","d":"M256.3 0c123.7 0 224 100.3 224 224 0 50.3-16.6 96.7-44.6 134.1L557.5 480l-45.2 45.3-121.9-121.9c-37.4 28-83.8 44.6-134.1 44.6-123.7 0-224-100.3-224-224S132.5 0 256.3 0m0 64a160 160 0 1 0 0 320 160 160 0 1 0 0-320m96 188h-192v-56h192z"})
  );
}

export default CoreMagnifyingGlassMinusRegularDuo;
