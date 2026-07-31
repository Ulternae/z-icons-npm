import React from 'react';

export const LanMessageWaveformThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M208 492.7V448c0-8.8-7.2-16-16-16h-32c-44.2 0-80-35.8-80-80V128c0-44.2 35.8-80 80-80h320c44.2 0 80 35.8 80 80v157.4c6 2.8 11.4 6.7 16 11.4V128c0-53-43-96-96-96H160c-53 0-96 43-96 96v224c0 53 43 96 96 96h32v75.9c0 11.1 9 20.1 20.1 20.1 4.2 0 8.2-1.3 11.6-3.7l96.2-67.9v-19.6l-80 56.5c-.2.2-5.6 3.9-16 11.3l-.4.3c-2.8 2-5.8 4.1-9.1 6.4-.7.5-1.6.7-2.4.7-2.1-.1-4.1-1.8-4.1-4.1v-31.2zM464 304c0-4.4-3.6-8-8-8s-8 3.6-8 8v224c0 4.4 3.6 8 8 8s8-3.6 8-8zm80 32c0-4.4-3.6-8-8-8s-8 3.6-8 8v160c0 4.4 3.6 8 8 8s8-3.6 8-8zm-160 16c0-4.4-3.6-8-8-8s-8 3.6-8 8v128c0 4.4 3.6 8 8 8s8-3.6 8-8zm240 32c0-4.4-3.6-8-8-8s-8 3.6-8 8v64c0 4.4 3.6 8 8 8s8-3.6 8-8z"})
);

export default LanMessageWaveformThin;
