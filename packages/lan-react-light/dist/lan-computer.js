import React from 'react';

export function LanComputer({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M336 352H64c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h273.3c1.9-11.5 5.9-22.3 11.5-32H64C28.7 32 0 60.7 0 96v224c0 35.3 28.7 64 64 64h272zm1.3 96H112c-8.8 0-16 7.2-16 16s7.2 16 16 16h236.8c-5.6-9.7-9.6-20.5-11.5-32M432 64h96c8.8 0 16 7.2 16 16v48H416V80c0-8.8 7.2-16 16-16m-16 96h128v64H416zm128 96v176c0 8.8-7.2 16-16 16h-96c-8.8 0-16-7.2-16-16V256zM384 80v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48m120 264a24 24 0 1 0-48 0 24 24 0 1 0 48 0"})
  );
}

export default LanComputer;
