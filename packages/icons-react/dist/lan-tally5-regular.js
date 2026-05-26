import React from 'react';

export const LanTally5Regular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M120 56c0-13.3-10.7-24-24-24S72 42.7 72 56v234l-54.3 14.8C4.9 308.3-2.6 321.5.9 334.3s16.7 20.3 29.5 16.8L72 339.8V456c0 13.3 10.7 24 24 24s24-10.7 24-24V326.7l80-21.8V456c0 13.3 10.7 24 24 24s24-10.7 24-24V291.8l80-21.8v186c0 13.3 10.7 24 24 24s24-10.7 24-24V256.9l80-21.8V456c0 13.3 10.7 24 24 24s24-10.7 24-24V222l54.3-14.8c12.8-3.5 20.3-16.7 16.8-29.5s-16.7-20.3-29.5-16.8L504 172.2V56c0-13.3-10.7-24-24-24s-24 10.7-24 24v129.3l-80 21.8V56c0-13.3-10.7-24-24-24s-24 10.7-24 24v164.2L248 242V56c0-13.3-10.7-24-24-24s-24 10.7-24 24v199.1l-80 21.8z"})
);

export default LanTally5Regular;
