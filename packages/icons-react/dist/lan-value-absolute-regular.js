import React from 'react';

export const LanValueAbsoluteRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M24 64C10.7 64 0 74.7 0 88v336c0 13.3 10.7 24 24 24s24-10.7 24-24V88c0-13.3-10.7-24-24-24m145 71c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l87 87-87 87c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l87-87 87 87c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-87-87 87-87c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-87 87zm343-47c0-13.3-10.7-24-24-24s-24 10.7-24 24v336c0 13.3 10.7 24 24 24s24-10.7 24-24z"})
);

export default LanValueAbsoluteRegular;
