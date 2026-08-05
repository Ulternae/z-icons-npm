import React from 'react';

export function LanTowerObservationThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M220.3.9c2.3-1.2 5.1-1.2 7.4 0l184 96c3.9 2 5.4 6.9 3.4 10.8s-6.9 5.4-10.8 3.4L384 100.5V184c0 22.1-17.9 40-40 40h-30.3l52.9 272H440c4.4 0 8 3.6 8 8s-3.6 8-8 8H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h73.4l52.9-272H104c-22.1 0-40-17.9-40-40v-83.5l-20.3 10.6c-3.9 2-8.7.5-10.8-3.4s-.5-8.7 3.4-10.8zM224 17 80 92.2V144h288V92.2zM80 160v24c0 13.3 10.7 24 24 24h240c13.3 0 24-10.7 24-24v-24zm270.3 336-5.3-27.3-121-95.1-121 95.1-5.3 27.3zM138.5 286.1l85.5 67.2 85.5-67.2-12.1-62.1H150.6zm-3.4 17.7-27.4 140.9 103.4-81.2zM237 363.5l103.4 81.2L313 303.8z"})
  );
}

export default LanTowerObservationThin;
