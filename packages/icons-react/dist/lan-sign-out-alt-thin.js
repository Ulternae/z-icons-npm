import React from 'react';

export const LanSignOutAltThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M493.7 250.3c3.1 3.1 3.1 8.2 0 11.3l-144 144c-2.3 2.3-5.7 3-8.7 1.7-3-1.2-4.9-4.2-4.9-7.4v-88c0-4.4-3.6-8-8-8h-120c-17.7 0-32-14.3-32-32v-32c0-17.7 14.3-32 32-32h120c4.4 0 8-3.6 8-8v-88c0-3.2 1.9-6.2 4.9-7.4s6.4-.6 8.7 1.7l144 144zM361 417l144-144c9.4-9.4 9.4-24.6 0-33.9l-144-144c-6.9-6.9-17.2-8.9-26.2-5.2S320 102.3 320 112v80H208c-26.5 0-48 21.5-48 48v32c0 26.5 21.5 48 48 48h112v80c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2M184 48c4.4 0 8-3.6 8-8s-3.6-8-8-8H96C43 32 0 75 0 128v256c0 53 43 96 96 96h88c4.4 0 8-3.6 8-8s-3.6-8-8-8H96c-44.2 0-80-35.8-80-80V128c0-44.2 35.8-80 80-80z"})
);

export default LanSignOutAltThin;
