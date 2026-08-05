import React from 'react';

export function LanFluteSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -15.925 576 543.85',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M505.9-1.9c-18.7-18.7-49.1-18.7-67.9 0l-275 275L270.9 381l275-275c18.7-18.7 18.7-49.1 0-67.9zM237 414.9 129.1 307l-99 99c-18.7 18.7-18.7 49.1 0 67.9l40 40c18.7 18.7 49.1 18.7 67.9 0zM288 232a24 24 0 1 1 48 0 24 24 0 1 1-48 0M120 400a24 24 0 1 1 0 48 24 24 0 1 1 0-48m232-232a24 24 0 1 1 48 0 24 24 0 1 1-48 0m88-88a24 24 0 1 1 0 48 24 24 0 1 1 0-48"})
  );
}

export default LanFluteSolid;
