import React from 'react';

export const LanSplitThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M410.3 13.7c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0l88 88c3.1 3.1 3.1 8.2 0 11.3l-88 88c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l74.3-74.3H356.4c-21.2 0-41.6 8.4-56.6 23.4L191.4 235.9c-8.6 8.6-18.6 15.4-29.5 20.1 10.9 4.8 20.9 11.5 29.5 20.1l108.5 108.5c15 15 35.4 23.4 56.6 23.4h128.2l-74.3-74.3c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0l88 88c3.1 3.1 3.1 8.2 0 11.3l-88 88c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l74.3-74.3H356.5c-25.5 0-49.9-10.1-67.9-28.1L180.1 287.4c-15-15-35.4-23.4-56.6-23.4H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h115.5c21.2 0 41.6-8.4 56.6-23.4l108.5-108.5c18-18 42.4-28.1 67.9-28.1h128.2l-74.3-74.3z"})
);

export default LanSplitThin;
