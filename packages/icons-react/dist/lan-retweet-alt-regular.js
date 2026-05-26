import React from 'react';

export const LanRetweetAltRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M463 473c9.4 9.4 24.6 9.4 33.9 0l72-72c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-31 31V128c0-53-43-96-96-96H280c-13.3 0-24 10.7-24 24s10.7 24 24 24h128c26.5 0 48 21.5 48 48v270.1l-31-31c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l72 72zM113 39c-9.4-9.4-24.6-9.4-33.9 0L7 111c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l31-31V384c0 53 43 96 96 96h128c13.3 0 24-10.7 24-24s-10.7-24-24-24h-128c-26.5 0-48-21.5-48-48V113.9l31 31c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9z"})
);

export default LanRetweetAltRegular;
