import React from 'react';

export const LanSyringe = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -15.95 576 527.95',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M491.3-11.3c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L489.4 32 432 89.4l-68.7-68.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l4.7 4.7-235.3 235.3c-9 9-14.1 21.2-14.1 33.9v108.1l-59.3 59.3c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l59.3-59.3h108.1c12.7 0 24.9-5.1 33.9-14.1l235.3-235.3 4.7 4.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L454.6 112 512 54.6l20.7 20.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6zM473.4 176 238.1 411.3c-3 3-7.1 4.7-11.3 4.7h-98.7v-98.7c0-4.2 1.7-8.3 4.7-11.3l43.3-43.3 36.7 36.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-36.7-36.7 73.4-73.4 36.7 36.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L294.6 144 368 70.6z"})
);

export default LanSyringe;
