import React from 'react';

export function LanToriiGateThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M12.6 9.4C10.1 7.7 7 7.5 4.3 8.9S0 13 0 16v88c0 37.1 28 67.6 64 71.6V272H40c-4.4 0-8 3.6-8 8s3.6 8 8 8h24v216c0 4.4 3.6 8 8 8s8-3.6 8-8V288h288v216c0 4.4 3.6 8 8 8s8-3.6 8-8V288h24c4.4 0 8-3.6 8-8s-3.6-8-8-8h-24v-96.4c36-4 64-34.5 64-71.6V16c0-3-1.7-5.7-4.3-7.1s-5.8-1.2-8.3.5l-63.5 44.5c-9.4 6.6-20.6 10.1-32.1 10.1H108.2c-11.5 0-22.7-3.5-32.1-10.1zM368 176v96H232v-96zm-152 0v96H80v-96zM16 104V31.4L66.9 67c12.1 8.5 26.5 13 41.3 13h231.7c14.8 0 29.2-4.5 41.3-13L432 31.4V104c0 30.9-25.1 56-56 56H72c-30.9 0-56-25.1-56-56"})
  );
}

export default LanToriiGateThin;
