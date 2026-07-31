import React from 'react';

export const LanGiftCardRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M357.8 48c-14.9 0-28.8 7.9-36.3 20.8L286.7 128H360c22.1 0 40-17.9 40-40s-17.9-40-40-40zm-132.5 80-34.8-59.2C182.9 55.9 169.1 48 154.2 48H152c-22.1 0-40 17.9-40 40s17.9 40 40 40zM256 85.5l24.1-41C296.3 16.9 325.9 0 357.8 0h2.2c48.6 0 88 39.4 88 88 0 14.4-3.5 28-9.6 40h9.6c35.3 0 64 28.7 64 64v224c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V192c0-35.3 28.7-64 64-64h9.6c-6.1-12-9.6-25.6-9.6-40 0-48.6 39.4-88 88-88h2.2c31.9 0 61.5 16.9 77.7 44.4l24.1 41zM152 176H64c-8.8 0-16 7.2-16 16v128h416V192c0-8.8-7.2-16-16-16H309.6l31 51.7c6.8 11.4 3.1 26.1-8.2 32.9s-26.1 3.1-32.9-8.2L256 180l-43.4 72.3c-6.8 11.4-21.6 15.1-32.9 8.2s-15.1-21.6-8.2-32.9l31-51.7h-50.4zm312 208H48v32c0 8.8 7.2 16 16 16h384c8.8 0 16-7.2 16-16z"})
);

export default LanGiftCardRegular;
