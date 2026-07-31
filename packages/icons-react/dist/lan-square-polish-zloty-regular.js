import React from 'react';

export const LanSquarePolishZlotyRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 80c-8.8 0-16 7.2-16 16v320c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm319.4 56v77.4l10.6-4.2c8.2-3.3 17.5.7 20.8 8.9s-.7 17.5-8.9 20.8l-22.5 9V360c0 13.3-10.7 24-24 24s-24-10.7-24-24v-76.9l-9.5 3.8c-8.2 3.3-17.5-.7-20.8-8.9s.7-17.5 8.9-20.8l21.4-8.6V152c0-13.3 10.7-24 24-24s24 10.7 24 24M96 216c0-13.3 10.7-24 24-24h96c8.7 0 16.7 4.7 20.9 12.3s4.1 16.8-.5 24.3L170.8 336H216c13.3 0 24 10.7 24 24s-10.7 24-24 24h-88c-8.7 0-16.7-4.7-20.9-12.3s-4.1-16.8.5-24.3L173.2 240H120c-13.3 0-24-10.7-24-24"})
);

export default LanSquarePolishZlotyRegular;
