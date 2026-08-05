import React from 'react';

export function LanChartUserThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 640 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M192 48h352c26.5 0 48 21.5 48 48v288c0 26.5-21.5 48-48 48H328.6c1.8 5.2 3.2 10.5 4.4 16h211c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H192c-35.3 0-64 28.7-64 64v49c5.2-.7 10.6-1 16-1V96c0-26.5 21.5-48 48-48m224 104c0 4.4 3.6 8 8 8h76.7L384 276.7l-74.3-74.3c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l80 80c3.1 3.1 8.2 3.1 11.3 0L512 171.3V248c0 4.4 3.6 8 8 8s8-3.6 8-8v-96c0-4.4-3.6-8-8-8h-96c-4.4 0-8 3.6-8 8m-272 64a56 56 0 1 1 0 112 56 56 0 1 1 0-112m0 128a72 72 0 1 0 0-144 72 72 0 1 0 0 144M0 480v24c0 4.4 3.6 8 8 8s8-3.6 8-8v-24c0-44.2 35.8-80 80-80h96c44.2 0 80 35.8 80 80v24c0 4.4 3.6 8 8 8s8-3.6 8-8v-24c0-53-43-96-96-96H96c-53 0-96 43-96 96"})
  );
}

export default LanChartUserThin;
