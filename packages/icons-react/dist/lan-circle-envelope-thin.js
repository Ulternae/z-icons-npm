import React from 'react';

export const LanCircleEnvelopeThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480m0 496a256 256 0 1 0 0-512 256 256 0 1 0 0 512m128-320v13.5l-116.9 65.1a22.7 22.7 0 0 1-22.2 0L128 205.5V192c0-17.7 14.3-32 32-32h192c17.7 0 32 14.3 32 32M128 320v-96.2l109.1 60.8c5.8 3.2 12.3 4.9 18.9 4.9s13.1-1.7 18.9-4.9L384 223.8V320c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32m32-176c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h192c26.5 0 48-21.5 48-48V192c0-26.5-21.5-48-48-48z"})
);

export default LanCircleEnvelopeThin;
