import React from 'react';

export const LanLaptopSlash = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -31.85 640 575.9',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M59.3-27.2c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l544 544c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-37.7-37.7c42.1-6.2 74.4-42.4 74.4-86.2 0-13.7-11.1-24.9-24.9-24.9H454.5l-304-304H512c17.7 0 32 14.3 32 32v224h32V96c0-35.3-28.7-64-64-64H128c-3 0-6 .2-8.9.6zM486.5 400h121c-3.5 27.1-26.6 48-54.7 48h-18.4l-48-48zM64 96v224h32V122.5L64.2 90.7c-.1 1.7-.2 3.5-.2 5.3M24.9 368C11.1 368 0 379.1 0 392.9 0 441 39 480 87.1 480h366.4l-32-32H87.1c-28 0-51.2-20.9-54.7-48h341l-32-32H24.8z"})
);

export default LanLaptopSlash;
