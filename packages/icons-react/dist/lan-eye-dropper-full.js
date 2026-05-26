import React from 'react';

export const LanEyeDropperFull = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M364.2 51.9 243.3 172.8l95.9 95.9 120.9-120.9c26.5-26.5 26.5-69.4 0-95.9s-69.4-26.5-95.9 0m118.6 118.5L361.9 291.3l17.4 17.4c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L209.4 184l-28.7-28.7c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l17.4 17.4L341.6 29.2c39-39 102.2-39 141.1 0s39 102.2 0 141.1zm-303.5 50.3 112 112c6.2 6.2 6.2 16.4 0 22.6L190.1 456.6c-15 15-35.4 23.4-56.6 23.4H92.3l-49.4 28.2c-4.3 2.5-9.2 3.8-14.2 3.8C12.9 512 .1 499.2.1 483.4c0-5 1.3-9.9 3.8-14.2l28.2-49.4v-41.2c0-21.2 8.4-41.6 23.4-56.6l101.2-101.3c6.2-6.2 16.4-6.2 22.6 0M78.6 344l89.4 89.4 33.4-33.4-89.4-89.4zm-14.5 30.8c-.1 1.2-.1 2.5-.1 3.7V424c0 2.8-.7 5.5-2.1 7.9l-24.2 42.4 42.4-24.2c2.4-1.4 5.2-2.1 7.9-2.1h45.5c1.3 0 2.5 0 3.7-.1zM257.4 344 168 254.6 134.6 288l89.4 89.4z"})
);

export default LanEyeDropperFull;
