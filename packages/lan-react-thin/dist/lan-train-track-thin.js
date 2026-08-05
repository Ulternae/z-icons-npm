import React from 'react';

export function LanTrainTrackThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M161.7 32.2c4.3 1 7 5.2 6.1 9.5L150.4 120h211.2l-17.4-78.3c-1-4.3 1.8-8.6 6.1-9.5s8.6 1.8 9.5 6.1L378 120h62c4.4 0 8 3.6 8 8s-3.6 8-8 8h-58.5l24.9 112H472c4.4 0 8 3.6 8 8s-3.6 8-8 8h-62l24.9 112H504c4.4 0 8 3.6 8 8s-3.6 8-8 8h-65.6l17.4 78.3c1 4.3-1.8 8.6-6.1 9.5s-8.6-1.8-9.5-6.1L422 392H90l-18.2 81.7c-1 4.3-5.2 7-9.5 6.1s-7-5.2-6.1-9.5L73.6 392H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h69.1L102 264H40c-4.4 0-8-3.6-8-8s3.6-8 8-8h65.6l24.9-112H72c-4.4 0-8-3.6-8-8s3.6-8 8-8h62l18.2-81.7c1-4.3 5.2-7 9.5-6.1M146.9 136 122 248h268.1l-24.9-112zm246.7 128H118.4L93.5 376h324.9l-24.9-112z"})
  );
}

export default LanTrainTrackThin;
