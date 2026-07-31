import React from 'react';

export const LanRectangleBetaThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M582.5 64.3C614.8 67.6 640 94.9 640 128v256l-.3 6.5c-3.1 30.1-27 54.1-57.1 57.1l-6.5.3h-512l-6.5-.3c-30.1-3.1-54.1-27-57.1-57.1L0 384V128c0-33.1 25.2-60.4 57.5-63.7L64 64h512zM64 80c-24.9 0-45.3 18.9-47.8 43.1L16 128v256c0 26.5 21.5 48 48 48h512c26.5 0 48-21.5 48-48V128c0-26.5-21.5-48-48-48zm80 104c22.1 0 40 17.9 40 40 0 11.5-4.8 21.8-12.6 29.1C183.7 259.9 192 273 192 288c0 22.1-17.9 40-40 40h-40c-3.9 0-7.1-2.7-7.8-6.4l-.2-1.6V192c0-4.4 3.6-8 8-8zm160 0c4.4 0 8 3.6 8 8s-3.6 8-8 8h-56v48h40c4.4 0 8 3.6 8 8s-3.6 8-8 8h-40v48h56c4.4 0 8 3.6 8 8s-3.6 8-8 8h-64c-4.4 0-8-3.6-8-8V192l.2-1.6c.8-3.6 4-6.4 7.8-6.4zm112 0c4.4 0 8 3.6 8 8s-3.6 8-8 8h-24v120c0 4.4-3.6 8-8 8s-8-3.6-8-8V200h-24c-4.4 0-8-3.6-8-8s3.6-8 8-8zm88 0c17.7 0 32 14.3 32 32v104c0 4.4-3.6 8-8 8s-8-3.6-8-8v-40h-48v40c0 4.4-3.6 8-8 8s-8-3.6-8-8V216c0-17.7 14.3-32 32-32zM120 312h32c13.3 0 24-10.7 24-24s-10.7-24-24-24h-32zm368-112c-8.8 0-16 7.2-16 16v48h48v-48c0-8.8-7.2-16-16-16zm-368 48h24c13.3 0 24-10.7 24-24s-10.7-24-24-24h-24z"})
);

export default LanRectangleBetaThin;
