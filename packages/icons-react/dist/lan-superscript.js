import React from 'react';

export const LanSuperscript = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M528 16c0-5.1-2.5-10-6.6-13S511.8-.8 506.9.8l-48 16c-8.4 2.8-12.9 11.9-10.1 20.2s11.9 13 20.3 10.2l26.9-9V160h-32c-8.8 0-16 7.2-16 16s7.2 16 16 16h96c8.8 0 16-7.2 16-16s-7.2-16-16-16h-32zM80 64c-8.8 0-16 7.2-16 16s7.2 16 16 16h39.2L221 256 119.2 416H80c-8.8 0-16 7.2-16 16s7.2 16 16 16h48c5.5 0 10.6-2.8 13.5-7.4L240 285.8l98.5 154.8c2.9 4.6 8 7.4 13.5 7.4h48c8.8 0 16-7.2 16-16s-7.2-16-16-16h-39.2L259 256 360.8 96H400c8.8 0 16-7.2 16-16s-7.2-16-16-16h-48c-5.5 0-10.6 2.8-13.5 7.4L240 226.2 141.5 71.4c-2.9-4.6-8-7.4-13.5-7.4z"})
);

export default LanSuperscript;
