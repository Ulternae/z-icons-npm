import React from 'react';

export const CoreArrowLeftRegularDuo = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"m269.3 64-160 160h338.8v64H109.3l160 160-45.3 45.3L9.4 278.7c-12.5-12.5-12.5-32.8 0-45.3L224 18.8z"})
);

export default CoreArrowLeftRegularDuo;
