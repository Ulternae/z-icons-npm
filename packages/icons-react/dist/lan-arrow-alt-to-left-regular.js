import React from 'react';

export const LanArrowAltToLeftRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M24 64c13.3 0 24 10.7 24 24v336c0 13.3-10.7 24-24 24S0 437.3 0 424V88c0-13.3 10.7-24 24-24m111 209c-4.5-4.5-7-10.6-7-17s2.5-12.5 7-17L279 95c6.9-6.9 17.2-8.9 26.2-5.2S320 102.3 320 112v64h144c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H320v64c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2zm249 15h80v-64H296c-6.4 0-12.5-2.5-17-7s-7-10.6-7-17v-30.1L185.9 256l86.1 86.1V312c0-13.3 10.7-24 24-24z"})
);

export default LanArrowAltToLeftRegular;
