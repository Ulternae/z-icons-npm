import React from 'react';

export const LanLeftFromBracketThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M18.3 261.7c-3.1-3.1-3.1-8.2 0-11.3l144-144c2.3-2.3 5.7-3 8.7-1.7 3 1.2 4.9 4.2 4.9 7.4v88c0 4.4 3.6 8 8 8h120c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32h-120c-4.4 0-8 3.6-8 8v88c0 3.2-1.9 6.2-4.9 7.4s-6.4.6-8.7-1.7l-144-144zM151 95 7 239c-9.4 9.4-9.4 24.6 0 33.9l144 144c6.9 6.9 17.2 8.9 26.2 5.2S192 409.7 192 400v-80h112c26.5 0 48-21.5 48-48v-32c0-26.5-21.5-48-48-48H192v-80c0-9.7-5.8-18.5-14.8-22.2S157.9 88.2 151 95m177 369c-4.4 0-8 3.6-8 8s3.6 8 8 8h88c53 0 96-43 96-96V128c0-53-43-96-96-96h-88c-4.4 0-8 3.6-8 8s3.6 8 8 8h88c44.2 0 80 35.8 80 80v256c0 44.2-35.8 80-80 80z"})
);

export default LanLeftFromBracketThin;
