import React from 'react';

export function LanDroneAltThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 640 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M0 104c0-4.4 3.6-8 8-8h272c4.4 0 8 3.6 8 8s-3.6 8-8 8H152v96h336v-96H360c-4.4 0-8-3.6-8-8s3.6-8 8-8h272c4.4 0 8 3.6 8 8s-3.6 8-8 8H504v112c0 2-.8 4-2.2 5.5l-48.7 52.2 1.1 1.5 35.8 46c14.2 18.3 21.9 40.7 21.9 63.8v47.1c0 4.4-3.6 8-8 8s-8-3.6-8-8V393c0-19.6-6.5-38.6-18.5-54L442 293.6l-52.3 56c-1.5 1.6-3.6 2.5-5.8 2.5h-128c-2.2 0-4.3-.9-5.8-2.5l-52.3-56-35.4 45.4c-12 15.4-18.5 34.5-18.5 54v47.1c0 4.4-3.6 8-8 8s-8-3.6-8-8V393c0-23.1 7.7-45.6 21.9-63.8l35.8-46 1.1-1.5-48.7-52.2c-1.4-1.5-2.2-3.4-2.2-5.5V112H7.8c-4.4 0-8-3.6-8-8zm154.9 120 104.5 112h121l104.5-112H154.8z"})
  );
}

export default LanDroneAltThin;
