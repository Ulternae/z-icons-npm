import React from 'react';

export const LanDeleteRightRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M434.7 64c17 0 33.3 6.7 45.3 18.7l150.6 150.7c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6L480 429.3c-12 12-28.3 18.7-45.3 18.7H128c-35.3 0-64-28.7-64-64V128c0-35.3 28.7-64 64-64zM112 128v256c0 8.8 7.2 16 16 16h306.7c4.2 0 8.3-1.7 11.3-4.7L585.4 256 446.1 116.7c-3-3-7.1-4.7-11.3-4.7H128c-8.8 0-16 7.2-16 16m243.9 60.1c9.4 9.4 9.4 24.6 0 33.9L322 255.9l33.9 33.9c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-33.9-33.9-33.9 33.9c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l33.9-33.9-33.9-33.9c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l33.9 33.9 33.9-33.9c9.4-9.4 24.6-9.4 33.9 0"})
);

export default LanDeleteRightRegular;
