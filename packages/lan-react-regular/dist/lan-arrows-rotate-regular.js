import React from 'react';

export function LanArrowsRotateRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M109 108.9c81.2-81.2 212.9-81.2 294.2 0l27.1 27.1h-78.2c-13.3 0-24 10.7-24 24s10.7 24 24 24h136.1c13.3 0 24-10.7 24-24V24c0-13.3-10.7-24-24-24s-24 10.7-24 24v78.1L437.1 75C337.1-25 175-25 75.1 75 31.9 118.2 7.3 173.1 1.5 229.5c-1.4 13.2 8.2 25 21.4 26.3s25-8.2 26.3-21.4c4.8-45.8 24.7-90.3 59.8-125.5m401.7 173.6c1.4-13.2-8.2-25-21.4-26.3s-25 8.2-26.3 21.4c-4.7 45.8-24.7 90.4-59.8 125.5-81.2 81.2-212.9 81.2-294.2 0L81.9 376h78.2c13.3 0 24-10.7 24-24s-10.7-24-24-24H24c-13.3 0-24 10.7-24 24v136c0 13.3 10.7 24 24 24s24-10.7 24-24v-78.1L75.1 437c100 100 262.1 100 362 0 43.2-43.2 67.8-98.1 73.6-154.5"})
  );
}

export default LanArrowsRotateRegular;
