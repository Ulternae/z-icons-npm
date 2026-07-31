import React from 'react';

export const LanArrowsRotateReverseRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M403.2 108.9c-81.2-81.2-212.9-81.2-294.2 0L81.9 136h78.2c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V24C0 10.7 10.7 0 24 0s24 10.7 24 24v78.1L75.1 75c100-100 262.1-100 362 0 43.2 43.2 67.8 98.1 73.6 154.5 1.4 13.2-8.2 25-21.4 26.3s-25-8.2-26.3-21.4c-4.7-45.9-24.7-90.4-59.8-125.5M1.5 282.5c-1.4-13.2 8.2-25 21.4-26.3s25 8.2 26.3 21.4C54 323.4 73.9 368 109 403.1c81.2 81.2 212.9 81.2 294.2 0l27.1-27.1h-78.2c-13.3 0-24-10.7-24-24s10.7-24 24-24h136.1c13.3 0 24 10.7 24 24v136c0 13.3-10.7 24-24 24s-24-10.7-24-24v-78.1L437.1 437c-100 100-262.1 100-362 0-43.2-43.2-67.8-98.1-73.6-154.5"})
);

export default LanArrowsRotateReverseRegular;
