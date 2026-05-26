import React from 'react';

export const LanJoystickRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M224 0c61.9 0 112 50.1 112 112 0 53.6-37.7 98.4-88 109.4V352h136l6.5.3c32.3 3.3 57.5 30.5 57.5 63.7v32l-.3 6.5c-3.1 30.1-27 54.1-57.1 57.1l-6.5.3h-320l-6.5-.3c-30.1-3.1-54.1-27-57.1-57.1L0 448v-32c0-33.1 25.2-60.4 57.5-63.7l6.5-.3h136V221.4c-50.3-11-88-55.8-88-109.4C112 50.1 162.1 0 224 0M64 400c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM224 48a64 64 0 1 0 0 128 64 64 0 1 0 0-128"})
);

export default LanJoystickRegular;
