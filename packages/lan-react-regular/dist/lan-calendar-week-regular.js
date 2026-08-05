import React from 'react';

export function LanCalendarWeekRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M120 0c13.3 0 24 10.7 24 24v40h160V24c0-13.3 10.7-24 24-24s24 10.7 24 24v40h32c35.3 0 64 28.7 64 64v288c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128c0-35.3 28.7-64 64-64h32V24c0-13.3 10.7-24 24-24m0 112H64c-8.8 0-16 7.2-16 16v288c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16V128c0-8.8-7.2-16-16-16zm24 144v80h160v-80zm-48 0c0-26.5 21.5-48 48-48h160c26.5 0 48 21.5 48 48v80c0 26.5-21.5 48-48 48H144c-26.5 0-48-21.5-48-48z"})
  );
}

export default LanCalendarWeekRegular;
