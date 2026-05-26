import React from 'react';

export const LanUpFromBracket = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M241 7c-9.4-9.4-24.6-9.4-33.9 0l-144 144c-6.9 6.9-8.9 17.2-5.2 26.2S70.3 192 80 192h80v112c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V192h80c9.7 0 18.5-5.8 22.2-14.8s1.7-19.3-5.2-26.2zM99.3 160 224 35.3 348.7 160H272c-8.8 0-16 7.2-16 16v128c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16V176c0-8.8-7.2-16-16-16zM32 336c0-8.8-7.2-16-16-16s-16 7.2-16 16v80c0 53 43 96 96 96h256c53 0 96-43 96-96v-80c0-8.8-7.2-16-16-16s-16 7.2-16 16v80c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64z"})
);

export default LanUpFromBracket;
