import React from 'react';

export const LanShortsSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64.1 72v40h384V72c0-22.1-17.9-40-40-40h-304c-22.1 0-40 17.9-40 40m-6 88L12.6 413.4c-3.9 21.8 10.7 42.7 32.5 46.5l138 24c20.8 3.6 40.9-9.6 45.8-30.1l27.2-114.3 27.2 114.3c4.9 20.6 24.9 33.8 45.8 30.1l138-24c21.8-3.8 36.4-24.6 32.5-46.5L454.1 160z"})
);

export default LanShortsSolid;
