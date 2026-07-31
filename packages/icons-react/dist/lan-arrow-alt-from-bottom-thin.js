import React from 'react';

export const LanArrowAltFromBottomThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M186.3 18.3c3.1-3.1 8.2-3.1 11.3 0l144 144c2.3 2.3 3 5.7 1.7 8.7-1.2 3-4.2 4.9-7.4 4.9h-88c-4.4 0-8 3.6-8 8v152c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32v-152c0-4.4-3.6-8-8-8h-88c-3.2 0-6.2-1.9-7.4-4.9s-.6-6.4 1.7-8.7l144-144zM128 256v80c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V192h80c9.7 0 18.5-5.8 22.2-14.8s1.7-19.3-5.2-26.2L209 7c-9.4-9.4-24.6-9.4-33.9 0l-144 144c-6.9 6.9-8.9 17.2-5.2 26.2S38.3 192 48 192h80zM0 504c0 4.4 3.6 8 8 8h368c4.4 0 8-3.6 8-8s-3.6-8-8-8H8c-4.4 0-8 3.6-8 8"})
);

export default LanArrowAltFromBottomThin;
