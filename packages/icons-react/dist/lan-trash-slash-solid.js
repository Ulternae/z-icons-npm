import React from 'react';

export const LanTrashSlashSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -31.95 576 576.1',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L463.5 397.6 480 144H209.8l-48-48H480c17.7 0 32-14.3 32-32s-14.3-32-32-32h-96l-8.7-26.1C370.9-7.2 358.7-16 344.9-16H231.1c-13.8 0-26 8.8-30.4 21.9L192 32H97.8zm56.5 192.2 19.6 299.8c1.6 25.2 22.6 44.9 47.9 44.9h246c8.9 0 17.3-2.4 24.5-6.7z"})
);

export default LanTrashSlashSolid;
