import React from 'react';

export function LanGarageThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M576 150.3V504c0 4.4-3.6 8-8 8s-8-3.6-8-8V192H16v312c0 4.4-3.6 8-8 8s-8-3.6-8-8V150.3c0-23.1 14.2-43.8 35.7-52.2L270.6 6.8c11.2-4.4 23.6-4.4 34.8 0l234.9 91.3c21.5 8.4 35.7 29.1 35.7 52.2m-16 0c0-16.5-10.1-31.3-25.5-37.3L299.6 21.7c-7.5-2.9-15.7-2.9-23.2 0L41.5 113C26.1 119 16 133.8 16 150.3V176h544zM112 280v88h352v-88c0-4.4-3.6-8-8-8H120c-4.4 0-8 3.6-8 8m352 224V384H112v120c0 4.4-3.6 8-8 8s-8-3.6-8-8V280c0-13.3 10.7-24 24-24h336c13.3 0 24 10.7 24 24v224c0 4.4-3.6 8-8 8s-8-3.6-8-8m-240-40h128c4.4 0 8 3.6 8 8s-3.6 8-8 8H224c-4.4 0-8-3.6-8-8s3.6-8 8-8"})
  );
}

export default LanGarageThin;
