import React from 'react';

export function LanArrowsLeftRightToLineRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M48 120v272c0 13.3-10.7 24-24 24S0 405.3 0 392V120c0-13.3 10.7-24 24-24s24 10.7 24 24m528 0v272c0 13.3-10.7 24-24 24s-24-10.7-24-24V120c0-13.3 10.7-24 24-24s24 10.7 24 24M473 239c9.4 9.4 9.4 24.6 0 33.9l-72 72c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31H178l31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-72-72c-9.4-9.4-9.4-24.6 0-33.9l72-72c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-31 31h220.1l-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"})
  );
}

export default LanArrowsLeftRightToLineRegular;
