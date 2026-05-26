import React from 'react';

export const LanSignInAlt = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"m201 95 144 144c9.4 9.4 9.4 24.6 0 33.9L201 417c-6.9 6.9-17.2 8.9-26.2 5.2S160 409.7 160 400v-80H48c-26.5 0-48-21.5-48-48v-32c0-26.5 21.5-48 48-48h112v-80c0-9.7 5.8-18.5 14.8-22.2s19.3-1.6 26.2 5.2m-9 285.7L316.7 256 192 131.3V208c0 8.8-7.2 16-16 16H48c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h128c8.8 0 16 7.2 16 16zM336 448h80c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64h-80c-8.8 0-16-7.2-16-16s7.2-16 16-16h80c53 0 96 43 96 96v256c0 53-43 96-96 96h-80c-8.8 0-16-7.2-16-16s7.2-16 16-16"})
);

export default LanSignInAlt;
