import React from 'react';

export const LanLabelRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M401.2 64c16.9 0 32.9 7.6 43.5 20.8l126.5 156.1c7.1 8.8 7.1 21.4 0 30.2L444.7 427.3c-10.6 13.1-26.6 20.7-43.5 20.7H96.5c-35.3 0-64-28.7-64-64V128c0-35.3 28.7-64 64-64zM96.5 112c-8.8 0-16 7.2-16 16v256c0 8.8 7.2 16 16 16h304.7c2.4 0 4.7-1.1 6.2-3l114.2-141-114.2-141c-1.5-1.9-3.8-3-6.2-3z"})
);

export default LanLabelRegular;
