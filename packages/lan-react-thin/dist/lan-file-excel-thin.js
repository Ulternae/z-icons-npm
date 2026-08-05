import React from 'react';

export function LanFileExcelThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M197.5 16q5.4 0 10.5 1.2V120c0 30.9 25.1 56 56 56h102.8q1.2 5.1 1.2 10.5V448c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48V64c0-26.5 21.5-48 48-48zm156.4 136.6c2.3 2.3 4.3 4.8 6.1 7.4h-96c-22.1 0-40-17.9-40-40V24c2.7 1.8 5.1 3.8 7.4 6.1zM64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V186.5c0-17-6.7-33.3-18.7-45.3L242.7 18.7C230.7 6.7 214.5 0 197.5 0zm70.2 259c-2.8-3.4-7.8-4-11.2-1.2s-4 7.8-1.2 11.2l60 75-60 75c-2.8 3.4-2.2 8.5 1.2 11.2s8.5 2.2 11.2-1.2l57.8-72.2 57.8 72.2c2.8 3.4 7.8 4 11.2 1.2s4-7.8 1.2-11.2l-60-75 60-75c2.8-3.4 2.2-8.5-1.2-11.2s-8.5-2.2-11.2 1.2L192 331.2z"})
  );
}

export default LanFileExcelThin;
