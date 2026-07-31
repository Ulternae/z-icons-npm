import React from 'react';

export const LanFilters = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M409.4 195.3 540.7 64H211.3l131.3 131.3c6 6 9.4 14.1 9.4 22.6v114.7l48 48V217.9c0-8.5 3.4-16.6 9.4-22.6M567.3 82.6 432 217.9v168.4c0 16.4-13.3 29.7-29.7 29.7-7.9 0-15.4-3.1-21-8.7L327 353c-4.5-4.5-7-10.6-7-17V217.9L184.7 82.6c-5.6-5.6-8.7-13.1-8.7-21 0-16.4 13.3-29.7 29.7-29.7h340.7c16.4 0 29.7 13.3 29.7 29.7 0 7.9-3.1 15.4-8.7 21zM29.7 128h132.5l32 32H35.3l131.3 131.3c6 6 9.4 14.1 9.4 22.6v114.7l48 48V313.9c0-8.5 3.4-16.6 9.4-22.6l38.6-38.6V298l-16 16v168.4c0 16.4-13.3 29.7-29.7 29.7-7.9 0-15.4-3.1-21-8.7L151 449c-4.5-4.5-7-10.6-7-17V313.9L8.7 178.6C3.1 173.1 0 165.5 0 157.7 0 141.3 13.3 128 29.7 128"})
);

export default LanFilters;
