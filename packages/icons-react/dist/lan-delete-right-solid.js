import React from 'react';

export const LanDeleteRightSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 128c0-35.3 28.7-64 64-64h306.7c17 0 33.3 6.7 45.3 18.7l150.6 150.7c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6L480 429.3c-12 12-28.3 18.7-45.3 18.7H128c-35.3 0-64-28.7-64-64zm291.9 60.1c-9.4-9.4-24.6-9.4-33.9 0L288.1 222l-33.9-33.9c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l33.9 33.9-33.9 33.9c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l33.9-33.9 33.9 33.9c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L322 255.9l33.9-33.9c9.4-9.4 9.4-24.6 0-33.9"})
);

export default LanDeleteRightSolid;
