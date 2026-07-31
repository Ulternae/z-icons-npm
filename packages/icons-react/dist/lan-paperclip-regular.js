import React from 'react';

export const LanPaperclipRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -21.425 512 534.95',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M241.4 18.4c53.1-53.1 139.2-53.1 192.3 0s53.1 139.2 0 192.3L264 380.5c-34.4 34.4-90.1 34.4-124.5 0s-34.4-90.1 0-124.5L298 97.6c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L173.5 289.9c-15.6 15.6-15.6 40.9 0 56.6s40.9 15.6 56.6 0l169.7-169.7c34.4-34.4 34.4-90.1 0-124.5s-90.1-34.4-124.4 0l-181 181c-53.1 53.1-53.1 139.2 0 192.3s139.2 53.1 192.3 0l141.4-141.3c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L320.6 459.6c-71.9 71.9-188.4 71.9-260.2 0s-71.9-188.4 0-260.2z"})
);

export default LanPaperclipRegular;
