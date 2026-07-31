import React from 'react';

export const LanSingleQuoteLeftThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 192 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M136 96c4.4 0 8 3.6 8 8s-3.6 8-8 8h-16c-57.4 0-104 46.6-104 104v34.8C29.2 234.4 49.4 224 72 224h48c39.8 0 72 32.2 72 72v48c0 39.8-32.2 72-72 72H72c-39.8 0-72-32.2-72-72V216C0 149.7 53.7 96 120 96zM72 240c-30.9 0-56 25.1-56 56v48c0 30.9 25.1 56 56 56h48c30.9 0 56-25.1 56-56v-48c0-30.9-25.1-56-56-56z"})
);

export default LanSingleQuoteLeftThin;
