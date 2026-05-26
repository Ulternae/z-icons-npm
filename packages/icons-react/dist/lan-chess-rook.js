import React from 'react';

export const LanChessRook = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M352 0c17.7 0 32 14.3 32 32v138.7c0 13.8-4.5 27.3-12.8 38.4L336 256v128l42.7 71.1c3.5 5.8 5.3 12.5 5.3 19.3 0 20.8-16.8 37.6-37.6 37.6H37.6C16.8 512 0 495.2 0 474.4c0-6.8 1.8-13.5 5.3-19.3L48 384V256l-35.2-46.9C4.5 198 0 184.5 0 170.7V32C0 14.3 14.3 0 32 0zM75.4 400.5l-42.6 71c-.2.4-.4.9-.6 1.3l-.2 1.5c0 3.1 2.5 5.6 5.6 5.6h308.8c3.1 0 5.6-2.5 5.6-5.6 0-.5-.1-1-.2-1.5l-.6-1.3-42.7-71.1c-.1-.2-.2-.3-.2-.5l-232.6.1c-.1.2-.2.3-.2.5zM32 170.7c0 6.9 2.2 13.7 6.4 19.2l35.2 46.9c4.2 5.5 6.4 12.3 6.4 19.2v112h224V256c0-6.9 2.3-13.6 6.4-19.2l35.2-46.9 2.7-4.4c2.4-4.6 3.7-9.7 3.7-14.8V32h-80v48c0 8.8-7.2 16-16 16s-16-7.2-16-16V32h-96v48c0 8.8-7.2 16-16 16s-16-7.2-16-16V32H32z"})
);

export default LanChessRook;
