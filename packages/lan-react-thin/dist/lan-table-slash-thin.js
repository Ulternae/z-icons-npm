import React from 'react';

export function LanTableSlashThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '-0.025 -32.025 576.025 575.75',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M2.3-29.7c3.1-3.1 8.2-3.1 11.3 0l75.3 75.2C99.7 37.1 113.2 32 128 32h320l6.5.3c30.1 3.1 54.1 27 57.1 57.1l.3 6.5v320l-.3 6.5c-1.2 12.2-6 23.3-13.2 32.5l75.2 75.2c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0L2.3-18.4c-3.1-3.1-3.1-8.2 0-11.3M80 127.2V304h176.8l16 16H80v96c0 26.5 21.5 48 48 48h288.8l16 16H128c-35.3 0-64-28.7-64-64V111.2zm407.1 316.5c5.6-7.8 8.9-17.4 8.9-27.7v-96H363.4zM347.4 304H496V176H219.4zM128 48c-10.3 0-19.9 3.3-27.8 8.8L203.4 160H496V96c0-26.5-21.5-48-48-48z"})
  );
}

export default LanTableSlashThin;
