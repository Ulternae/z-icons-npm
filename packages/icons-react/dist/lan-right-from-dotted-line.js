import React from 'react';

export const LanRightFromDottedLine = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M505 273c9.4-9.4 9.4-24.6 0-33.9l-144-144c-6.9-6.9-17.2-8.9-26.2-5.2S320 102.3 320 112v80H176c-26.5 0-48 21.5-48 48v32c0 26.5 21.5 48 48 48h144v80c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2zm-249 15h-80c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h160c8.8 0 16-7.2 16-16v-76.7L476.7 256 352 380.7V304c0-8.8-7.2-16-16-16zM48 88a24 24 0 1 0-48 0 24 24 0 1 0 48 0m0 112a24 24 0 1 0-48 0 24 24 0 1 0 48 0m-24 88a24 24 0 1 0 0 48 24 24 0 1 0 0-48m24 136a24 24 0 1 0-48 0 24 24 0 1 0 48 0"})
);

export default LanRightFromDottedLine;
