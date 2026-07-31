import React from 'react';

export const NeoCheckSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 560 560',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M410.1 42.9C452.3 16.5 507.7 26 538.7 65s27.8 95.1-7.4 130.3c-57.5 57.5-113.4 129.5-155.8 188.9-21 29.4-38.2 54.9-50.1 73.1-6.1 9.3-12.1 18.6-18 28.1-15.7 25.5-42.3 42.5-72 46s-59.5-6.8-80.7-28l-126-126C-6.9 341.8-9.7 284.9 22.2 246s88.2-47.4 130.1-19.4l46.3 30.9c7.7-10.3 16.5-21.5 25.4-32.7 46-58.4 114.4-137 186-181.7z"})
);

export default NeoCheckSolid;
