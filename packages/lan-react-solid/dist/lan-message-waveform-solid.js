import React from 'react';

export function LanMessageWaveformSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 640 544',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 352V128c0-53 43-96 96-96h320c53 0 96 43 96 96v156.1c-11.4-7.7-25.2-12.1-40-12.1q-9.6 0-18.6 2.4C504.7 253.8 482 240 456 240c-31.7 0-58.6 20.5-68.2 49-3.8-.6-7.8-1-11.8-1-39.8 0-72 32.2-72 72v112c0 3.9.3 7.6.9 11.3l-74.5 55.9c-4.2 3.1-9.2 4.8-14.4 4.8-13.3 0-24-10.7-24-24v-72h-32c-53 0-96-43-96-96m416-40v208c0 13.3-10.7 24-24 24s-24-10.7-24-24V312c0-13.3 10.7-24 24-24s24 10.7 24 24m80 32v144c0 13.3-10.7 24-24 24s-24-10.7-24-24V344c0-13.3 10.7-24 24-24s24 10.7 24 24m-160 16v112c0 13.3-10.7 24-24 24s-24-10.7-24-24V360c0-13.3 10.7-24 24-24s24 10.7 24 24m240 32v48c0 13.3-10.7 24-24 24s-24-10.7-24-24v-48c0-13.3 10.7-24 24-24s24 10.7 24 24"})
  );
}

export default LanMessageWaveformSolid;
