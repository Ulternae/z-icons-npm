import React from 'react';

export const LanLeftToDottedLineThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M16 96a16 16 0 1 1 0-32 16 16 0 1 1 0 32m0 88a16 16 0 1 1 0-32 16 16 0 1 1 0 32m16 72a16 16 0 1 1-32 0 16 16 0 1 1 32 0M16 360a16 16 0 1 1 0-32 16 16 0 1 1 0 32m16 72a16 16 0 1 1-32 0 16 16 0 1 1 32 0m114.3-181.7c-3.1 3.1-3.1 8.2 0 11.3l144 144c2.3 2.3 5.7 3 8.7 1.7s4.9-4.2 4.9-7.4v-88c0-4.4 3.6-8 8-8h152c17.7 0 32-14.3 32-32v-32c0-17.7-14.3-32-32-32h-152c-4.4 0-8-3.6-8-8v-88c0-3.2-1.9-6.2-4.9-7.4s-6.4-.6-8.7 1.7l-144 144zM384 192h80c26.5 0 48 21.5 48 48v32c0 26.5-21.5 48-48 48H320v80c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2L135 273c-9.4-9.4-9.4-24.6 0-33.9L279 95c6.9-6.9 17.2-8.9 26.2-5.2S320 102.3 320 112v80z"})
);

export default LanLeftToDottedLineThin;
