import React from 'react';

export const LanParagraphRtlRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '-0.05 0 384.15 543.813',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M16 120C16 53.7 69.7 0 136 0h224c13.3 0 24 10.7 24 24s-10.7 24-24 24h-24v280c0 13.3-10.7 24-24 24s-24-10.7-24-24V48h-48v280c0 13.3-10.7 24-24 24s-24-10.7-24-24v-88h-56c-66.3 0-120-53.7-120-120m176 72V48h-56c-39.8 0-72 32.2-72 72s32.2 72 72 72zm-79 167c9.4 9.4 9.4 24.6 0 33.9l-31 31h278.1c13.3 0 24 10.7 24 24s-10.7 24-24 24H82l31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L7 465c-9.4-9.4-9.4-24.6 0-33.9l72-72c9.4-9.4 24.6-9.4 33.9 0z"})
);

export default LanParagraphRtlRegular;
