import React from 'react';

export function MinaConfetti({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M3.675 20.971a.508.508 0 0 1-.65-.637L5.615 9.21c.12-.374.6-.475.862-.183l7.756 7.544a.51.51 0 0 1-.212.82zm7.219-11.695L13.3 6.66q1.925-2.091.48-3.66M8 5.25v-.5m12-.25V4m0 9.5V13m-2 5.5V18m-4.219-5.586 2.406-2.615q2.407-2.616 4.813 0"})
  );
}

export default MinaConfetti;
