import React from 'react';

export function LanTowerObservationRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M213.7 2.3c6.5-3.1 14.1-3.1 20.6 0l168 80c12 5.7 17 20 11.3 32-5.3 11.2-18.2 16.4-29.7 12.3V200c0 27.2-19.4 49.9-45.2 55l34.8 209h50.3c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h50.3l34.8-209c-25.7-5-45.2-27.7-45.2-55v-73.4c-11.4 4.1-24.3-1.1-29.7-12.3-5.7-12-.6-26.3 11.4-32l168-80zM224 50.6l-112 53.3V128h224v-24.1zM112 176v24c0 4.4 3.6 8 8 8h208c4.4 0 8-3.6 8-8v-24zm186.8 288L224 400.7 149.2 464h149.7zM157.7 256l-3.7 22.5 70.1 59.3 70.1-59.3-3.7-22.5H157.8zm-12.9 77.6-13.8 83 55.9-47.3-42.1-35.6zm116.4 35.6 55.9 47.3-13.8-83-42.1 35.6z"})
  );
}

export default LanTowerObservationRegular;
