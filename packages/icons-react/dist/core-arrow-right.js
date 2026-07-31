import React from 'react';

export const CoreArrowRight = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"m178.8 448 160-160H.1v-64h338.7l-160-160L224 18.7l214.6 214.6c12.5 12.5 12.5 32.8 0 45.3L224 493.2z"})
);

export default CoreArrowRight;
