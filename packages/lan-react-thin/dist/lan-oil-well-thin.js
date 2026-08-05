import React from 'react';

export function LanOilWellThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M512.9 65.4c-9.1-34.1-44.2-54.4-78.4-45.3L419 24.3c-8.5 2.3-13.6 11.1-11.3 19.6L474 291.2c2.3 8.5 11.1 13.6 19.6 11.3l15.5-4.1c34.1-9.1 54.4-44.2 45.3-78.4zM430.4 4.7c42.7-11.4 86.5 13.9 98 56.6l41.4 154.5c11.4 42.7-13.9 86.5-56.6 98l-15.5 4.1c-17.1 4.6-34.6-5.6-39.2-22.6l-31.4-117.2L82 267.6l-2 .5V496h65.9l.8-2.5 67.2-210.7 19.2-5-28.8 90.2h135.4L305 259.1l16.2-4.2 76.1 238.6.8 2.5H568c4.4 0 8 3.6 8 8s-3.6 8-8 8H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h56V168c0-4.4 3.6-8 8-8s8 3.6 8 8v83.6L236.8 211l27.3-85.5c1.1-3.5 4.3-5.8 8-5.8s6.9 2.4 8 5.8l21.8 68.6L423 162.7 392.3 48c-4.6-17.1 5.6-34.6 22.6-39.2zM285.6 198.3 272 155.6 255.9 206zM380.5 496l-35.7-112H199.1l-35.7 112z"})
  );
}

export default LanOilWellThin;
