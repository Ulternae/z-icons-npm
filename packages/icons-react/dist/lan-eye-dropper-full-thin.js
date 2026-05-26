import React from 'react';

export const LanEyeDropperFullThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"m223.1 170.4-36.7-36.7c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0l25.4 25.4 11.3-11.3L341.6 29.3c39-39 102.2-39 141.1 0s39 102.2 0 141.1L375.5 277.6l-11.3 11.3 25.4 25.4c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0zm129.8 107.2 118.6-118.5c32.7-32.7 32.7-85.8 0-118.5s-85.8-32.7-118.5 0L234.4 159.1zm-174.6-75.3c3.1-3.1 8.2-3.1 11.3 0l120 120c3.1 3.1 3.1 8.2 0 11.3L184.4 458.9a71.98 71.98 0 0 1-50.9 21.1H82.4l-41.3 27.6c-4.3 2.9-9.4 4.4-14.7 4.4C11.8 512 0 500.2 0 485.6c0-5.2 1.5-10.3 4.4-14.7L32 429.6v-51.1c0-19.1 7.6-37.4 21.1-50.9zM68 335.3l-3.6 3.6A56.1 56.1 0 0 0 48 378.5V432c0 1.6-.5 3.1-1.3 4.4l-28.9 43.4c-1.1 1.7-1.8 3.7-1.8 5.8 0 5.8 4.7 10.4 10.4 10.4 2.1 0 4.1-.6 5.8-1.8l43.4-28.9c1.3-.9 2.9-1.3 4.4-1.3h53.5c14.9 0 29.1-5.9 39.6-16.4l3.6-3.6zM79.3 324 188 432.7l44.7-44.7L124 279.3zm56-56L244 376.7l48.7-48.7L184 219.3z"})
);

export default LanEyeDropperFullThin;
