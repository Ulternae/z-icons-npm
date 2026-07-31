import React from 'react';

export const LanTerminal = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M4.7 91.3c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l176 176c6.2 6.2 6.2 16.4 0 22.6l-176 176c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L169.4 256zM496 416c8.8 0 16 7.2 16 16s-7.2 16-16 16H208c-8.8 0-16-7.2-16-16s7.2-16 16-16z"})
);

export default LanTerminal;
