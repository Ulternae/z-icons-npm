import React from 'react';

export const LanSunglasses = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M128.3 64C106.8 64 88 78.2 82.1 98.8L37.2 256H224c17.7 0 32 14.3 32 32h64c0-17.7 14.3-32 32-32h186.8L493.9 98.8C488 78.2 469.2 64 447.7 64H416c-8.8 0-16-7.2-16-16s7.2-16 16-16h31.7c35.7 0 67.1 23.7 76.9 58l48.3 169c2 7.1 3.1 14.5 3.1 22v103c0 53-43 96-96 96h-64c-53 0-96-43-96-96v-64h-64v64c0 53-43 96-96 96H96c-53 0-96-43-96-96V281c0-7.4 1-14.8 3.1-22L51.4 90c9.8-34.3 41.2-58 76.9-58H160c8.8 0 16 7.2 16 16s-7.2 16-16 16zm390.4 224H352v96c0 12.1 3.3 23.3 9.1 33zm25.3 20.7L384.1 439.5c9.4 5.4 20.3 8.5 31.9 8.5h64c35.3 0 64-28.7 64-64zM32 288v96c0 12.1 3.3 23.3 9.1 33l157.6-129zm64 160h64c35.3 0 64-28.7 64-64v-75.3L64.1 439.5c9.4 5.4 20.3 8.5 31.9 8.5"})
);

export default LanSunglasses;
