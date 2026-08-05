import React from 'react';

export function LanChartLineUpDownThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M8 32c4.4 0 8 3.6 8 8v360c0 35.3 28.7 64 64 64h424c4.4 0 8 3.6 8 8s-3.6 8-8 8H80c-44.2 0-80-35.8-80-80V40c0-4.4 3.6-8 8-8m344 40c0-4.4 3.6-8 8-8h112c4.4 0 8 3.6 8 8v112c0 4.4-3.6 8-8 8s-8-3.6-8-8V91.3L293.7 261.6c-3.1 3.1-8.2 3.1-11.3 0l-74.3-74.3-98.3 98.3c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l104-104c3.1-3.1 8.2-3.1 11.3 0l74.2 74.4L452.7 80H360c-4.4 0-8-3.6-8-8m100.7 296L354 269.3l11.3-11.3 98.7 98.7V264c0-4.4 3.6-8 8-8s8 3.6 8 8v112c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8s3.6-8 8-8z"})
  );
}

export default LanChartLineUpDownThin;
