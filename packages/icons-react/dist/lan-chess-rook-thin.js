import React from 'react';

export const LanChessRookThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M352 0c17.7 0 32 14.3 32 32v138.7c0 13.8-4.5 27.3-12.8 38.4L336 256v136l41.8 62.7c4 6.1 6.2 13.2 6.2 20.4 0 20.3-16.5 36.8-36.8 36.8l-310.4.1C16.5 512 0 495.5 0 475.2c0-7.3 2.2-14.4 6.2-20.4L48 392V256l-35.2-46.9C4.5 198 0 184.5 0 170.7V32C0 14.3 14.3 0 32 0zM61.3 400.9l-41.8 62.7C17.2 467 16 471 16 475.2c0 11.5 9.3 20.8 20.8 20.8h310.3c10.1 0 18.5-7.2 20.4-16.7l.4-4.2c0-3.1-.7-6.1-2-8.9l-1.5-2.7-41.8-62.7c-.2-.3-.3-.6-.5-.9l-260.3.1c-.2.3-.3.6-.5.9M32 16c-8.8 0-16 7.2-16 16v138.7c0 10.4 3.4 20.5 9.6 28.8l35.2 46.9c2.1 2.8 3.2 6.1 3.2 9.6v128h256V256c0-3.5 1.1-6.8 3.2-9.6l35.2-46.9 2.2-3.2c4.8-7.6 7.4-16.5 7.4-25.6V32c0-8.8-7.2-16-16-16h-88v64c0 4.4-3.6 8-8 8s-8-3.6-8-8V16H136v64c0 4.4-3.6 8-8 8s-8-3.6-8-8V16z"})
);

export default LanChessRookThin;
