import React from 'react';

export const LanCommentWaveformSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M576 240c0 14.2-1.3 28.2-3.9 41.7-10.6-6.2-23-9.7-36.1-9.7q-9.6 0-18.6 2.4C504.7 253.8 482 240 456 240c-31.7 0-58.6 20.5-68.2 49-3.8-.6-7.8-1-11.8-1-39.8 0-72 32.2-72 72v112c0 2.6.1 5.1.4 7.6-31.4-1.8-61.2-8.8-88.5-20.2L97.5 510.1c-9.4 4-20.2 1.7-27.1-5.8s-8.3-18.5-3.6-27.5l48.8-92.2C83.2 344.3 64 294.3 64 240 64 107.5 178.6 0 320 0s256 107.5 256 240m-96 72v208c0 13.3-10.7 24-24 24s-24-10.7-24-24V312c0-13.3 10.7-24 24-24s24 10.7 24 24m80 32v144c0 13.3-10.7 24-24 24s-24-10.7-24-24V344c0-13.3 10.7-24 24-24s24 10.7 24 24m-160 16v112c0 13.3-10.7 24-24 24s-24-10.7-24-24V360c0-13.3 10.7-24 24-24s24 10.7 24 24m240 32v48c0 13.3-10.7 24-24 24s-24-10.7-24-24v-48c0-13.3 10.7-24 24-24s24 10.7 24 24"})
);

export default LanCommentWaveformSolid;
