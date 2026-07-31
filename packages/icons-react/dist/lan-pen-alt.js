import React from 'react';

export const LanPenAlt = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M404 32c-10.7 0-20.9 4.2-28.5 11.8L317 102.3l92.7 92.7 58.5-58.5c7.6-7.6 11.8-17.8 11.8-28.5s-4.2-20.9-11.8-28.5l-35.7-35.7A40.18 40.18 0 0 0 404 32M294.3 79.7l58.5-58.5C366.4 7.6 384.8 0 404 0s37.6 7.6 51.1 21.2l35.7 35.7C504.4 70.4 512 88.8 512 108s-7.6 37.6-21.2 51.1l-294 294c-10.7 10.7-24.1 18.5-38.7 22.6L30.4 511.1c-8.3 2.3-17.3 0-23.4-6.2s-8.5-15.1-6.2-23.4l35.6-127.7c4.1-14.6 11.8-27.9 22.6-38.7l212.8-212.8-25.1-25.1c-12.5-12.5-32.8-12.5-45.3 0L91.3 187.3c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l110-110.1c25-25 65.5-25 90.5 0zm0 45.3L81.6 337.8a56.33 56.33 0 0 0-14.4 24.6L35.5 476.5l114.1-31.7c9.3-2.6 17.8-7.5 24.6-14.4L387 217.7z"})
);

export default LanPenAlt;
