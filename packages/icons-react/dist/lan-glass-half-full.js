import React from 'react';

export const LanGlassHalfFull = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M32.5 40.7c-.4-4.7 3.3-8.7 8-8.7h303.7c4.7 0 8.4 4 8 8.7L336.8 224H48zM50.7 256h283.4l-16.4 194.7c-1.4 16.6-15.3 29.3-31.9 29.3H99c-16.6 0-30.5-12.7-31.9-29.3zM40.5 0C17.1 0-1.3 20 .6 43.4l34.6 410C38 486.5 65.7 512 99 512h186.8c33.3 0 61-25.5 63.8-58.6l34.6-410C386.1 20 367.6 0 344.2 0z"})
);

export default LanGlassHalfFull;
