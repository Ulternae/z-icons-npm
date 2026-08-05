import React from 'react';

export function LanLabelThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M401.2 64c16.9 0 32.9 7.6 43.5 20.8l126.5 156.1c7.1 8.8 7.1 21.4 0 30.2L444.7 427.3c-10.6 13.1-26.6 20.7-43.5 20.7H96.5c-35.3 0-64-28.7-64-64V128c0-35.3 28.7-64 64-64zM96.5 80c-26.5 0-48 21.5-48 48v256c0 26.5 21.5 48 48 48h304.7c12.1 0 23.5-5.4 31.1-14.8L558.7 261l1.3-2.4c.6-1.7.6-3.6 0-5.2l-1.3-2.4L432.3 94.8c-7.6-9.4-19-14.8-31.1-14.8z"})
  );
}

export default LanLabelThin;
