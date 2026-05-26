import React from 'react';

export const LanTimesToSlotRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M416 80c8.8 0 16 7.2 16 16v224c0 8.8-7.2 16-16 16H160c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16zM160 32c-35.3 0-64 28.7-64 64v224c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zM24 288c-13.3 0-24 10.7-24 24v104c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64V312c0-13.3-10.7-24-24-24s-24 10.7-24 24v104c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V312c0-13.3-10.7-24-24-24m331.9-147.9c-9.4-9.4-24.6-9.4-33.9 0L288.1 174l-33.9-33.9c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l33.9 33.9-33.9 33.9c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l33.9-33.9 33.9 33.9c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L322 207.9l33.9-33.9c9.4-9.4 9.4-24.6 0-33.9"})
);

export default LanTimesToSlotRegular;
