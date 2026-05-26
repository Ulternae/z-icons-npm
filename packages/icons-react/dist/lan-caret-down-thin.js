import React from 'react';

export const LanCaretDownThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 320 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M137.9 374.6c12.9 11.6 32.4 12.8 45.2 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9l-2.2-4.3c-5.7-9.5-16.1-15.5-27.4-15.5h-256l-4.8.3c-9.4 1.4-17.7 7-22.6 15.1l-2.2 4.3C-1.4 222.2.2 234 6.7 243l3.1 3.7 128 128zm33.9-11.3c-5.8 5.8-15.5 6.2-23.1-.5L21.2 235.3c-4.6-4.6-5.9-11.5-3.5-17.4S26 208 32.5 208h256c6.5 0 12.3 3.9 14.8 9.9s1.1 12.9-3.5 17.4z"})
);

export default LanCaretDownThin;
